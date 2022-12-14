// If else done at runtime.
// runtime meaning the conditional only occurs only when the code is executed.
// If else is not a runtime conditional.

interface PaymentDetails {
  amount: number;
  product_name: string;
}

export class PaymentCondition {
  static [key: string]: any;

  static MorningFlight(paymentDetails: PaymentDetails) {
    // Initialize payment with Paystack.
    console.log('Just payed with Paystack -> ', paymentDetails);
  }
  static AfternoonFlight(paymentDetails: PaymentDetails) {
    // Initialize payment with Paystack.
    console.log('Just payed with Paystack.', paymentDetails);
  }
  static NightFlight(paymentDetails: PaymentDetails) {
    // Initialize payment with LazerPay.
    console.log('Just payed with Lazerpay.', paymentDetails);
  }
}

type Payment = (arg0: PaymentDetails) => number;

class Order {
  payment: Payment;

  constructor(time: string) {
    this.payment = PaymentCondition[time];
  }

  pay() {
    this.payment({
      amount: 100,
      product_name: 'Airforce Max',
    });
  }
}

export const newOrder = (type) => {
  const orderInstance = new Order(type);
  orderInstance.pay()
  return orderInstance;
}