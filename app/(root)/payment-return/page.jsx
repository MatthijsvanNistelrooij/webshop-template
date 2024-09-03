import { useEffect } from "react";
import { useStripe } from "@stripe/react-stripe-js";

function PaymentReturnPage() {
  const stripe = useStripe();

  useEffect(() => {
    if (!stripe) return;

    const clientSecret = new URLSearchParams(window.location.search).get("payment_intent_client_secret");

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      if (paymentIntent.status === "succeeded") {
        // Handle successful payment
      } else {
        // Handle payment failure or processing status
      }
    });
  }, [stripe]);

  return <div>Processing payment...</div>;
}

export default PaymentReturnPage;
