import { serve } from "@upstash/workflow/express.js";

export const sendReminders = serve(async (context) => {
  const { subscriptionId } = context.requestPayload;
  const subscription = await fetchSubscription(context, subscriptionId);
});

const fetchSubscription = async (context, subscriptionId) => {};
