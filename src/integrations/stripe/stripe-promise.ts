import { loadStripe } from "@stripe/stripe-js";

// Replace with your Stripe Publishable Key
const STRIPE_PUBLISHABLE_KEY = "pk_test_51SX1aILuWelYhCLm2nA5csgHxKVj3rNiI1rS3quGGomQewmXv8iZcW268S2tE567HXaAyfIIteHUSusIISP58uQ000QFtGK4ug";

export const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
