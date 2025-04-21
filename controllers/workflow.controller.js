import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { serve } = require("@upstash/workflow/express");
import Subscription from "../models/subscription.model.js";
import dayjs from "dayjs";
import { sendReminderEmail } from "../utils/send-email.js";

const REMINDERS = [7, 5, 2, 1];

export const sendReminders = serve(async (context) => {
  // console.log("Processing subscription:", subscriptionId);
  const { subscriptionId } = context.requestPayload;
  //
  // console.log("Processing subscription:", subscriptionId);
  const subscription = await fetchSubscription(context, subscriptionId);
  if (!subscription || subscription.status !== "active") return;
  const renewalDate = dayjs(subscription.renewalDate);
  if (renewalDate.isBefore(dayjs())) {
    console.log(
      `Renewal date has passed for subscription ${subscriptionId}. Stopping workflow.`,
    );
    return;
  }
  for (const daysBefore of REMINDERS) {
    const reminderDate = renewalDate.subtract(daysBefore, "day");

    if (reminderDate.isAfter(dayjs())) {
      await sleepUntilReminder(
        context,
        `reminder ${daysBefore} days before`,
        reminderDate,
      );
    }
    await triggerReminder(
      context,
      `${daysBefore} days before reminder`,
      subscription,
    );
  }
});

const fetchSubscription = async (context, subscriptionId) => {
  return await context.run("get subscription", async () => {
    const doc = await Subscription.findById(subscriptionId).populate(
      "user",
      "name email",
    );
    return doc;
  });
};

const sleepUntilReminder = async (context, label, date) => {
  console.log(`Sleeping until ${label} reminder at ${date}`);
  await context.sleepUntil(label, date.toDate());
};
const triggerReminder = async (context, label, subscription) => {
  console.log("START triggerReminder", label, subscription.user.email);
  return await context.run(label, async () => {
    console.log(`Triggering ${label} remainder`);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    //   Send email, sms, push notification ........
    try {
      await sendReminderEmail({
        to: subscription.user.email,
        type: label,
        subscription,
      });
    } catch (e) {
      console.error(e);
    }
  });
};
