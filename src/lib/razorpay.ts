// Replace with your actual Razorpay Key ID before deploying
const RAZORPAY_KEY_ID = "rzp_test_XXXXXXXXXXXXXXX";

// Replace with your actual PHP backend URL on Hostinger
export const RAZORPAY_ORDER_API = "https://yourdomain.com/api/create-order.php";

interface RazorpayOrder {
  id: string;
  amount: number;
  currency: string;
}

interface PaymentOptions {
  courseName: string;
  courseCode: string;
  amount: number; // in smallest unit (paise for INR, cents for USD)
  currency: "INR" | "USD";
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  batchInfo: string;
  onSuccess: (paymentId: string, orderId: string) => void;
  onFailure: (error: string) => void;
}

export async function createRazorpayOrder(
  amount: number,
  currency: string,
  courseCode: string
): Promise<RazorpayOrder> {
  const res = await fetch(RAZORPAY_ORDER_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount, currency, course_code: courseCode }),
  });

  if (!res.ok) throw new Error("Failed to create order");
  return res.json();
}

export function openRazorpayCheckout(options: PaymentOptions) {
  const {
    courseName,
    amount,
    currency,
    customerName,
    customerEmail,
    customerPhone,
    onSuccess,
    onFailure,
  } = options;

  const rzpOptions = {
    key: RAZORPAY_KEY_ID,
    amount,
    currency,
    name: "The EduEdge",
    description: `Enrollment: ${courseName}`,
    image: "/favicon.jpg",
    handler: (response: { razorpay_payment_id: string; razorpay_order_id: string }) => {
      onSuccess(response.razorpay_payment_id, response.razorpay_order_id);
    },
    prefill: {
      name: customerName,
      email: customerEmail,
      contact: customerPhone,
    },
    theme: {
      color: "#0D9488",
    },
    modal: {
      ondismiss: () => {
        onFailure("Payment cancelled");
      },
    },
  };

  const rzp = new (window as any).Razorpay(rzpOptions);
  rzp.on("payment.failed", (response: any) => {
    onFailure(response.error?.description || "Payment failed");
  });
  rzp.open();
}
