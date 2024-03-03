// Strategy Design Pattern -> The Strategy Design Pattern is a behavioral design pattern. It allows you to dynamically change the behavior of an object by encapsulating it into different strategies.

// https://www.freecodecamp.org/news/a-beginners-guide-to-the-strategy-design-pattern/

// This approach can quickly become unmanageable and inflexible as the number of payment types increases.

/*
const PaymentType = {
  CREDIT_CARD,
  DEBIT_CARD,
  PAYPAL,
};

class PaymentProcessor {
  constructor(paymentType) {
    this.paymentType = paymentType;
  }

  processPayment(amount) {
    if (this.paymentType === PaymentType.CREDIT_CARD) {
      console.log(`Processing credit card payment of amount ${amount}Rs`);
    } else if (this.paymentType === PaymentType.DEBIT_CARD) {
      console.log(`Processing debit card payment of amount ${amount}Rs`);
    } else if (this.paymentType === PaymentType.PAYPAL) {
      console.log(`Processing Paypal payment of amount ${amount}Rs`);
    } else {
      throw new Error("Invalid Payment Type");
    }
  }
}
*/

// Solution

class PaymentStrategy {
  processPayment(amount) {}
}

class CreditCardPaymentStrategy extends PaymentStrategy {
  processPayment(amount) {
    console.log(`Processing credit card payment of amount ${amount}Rs`);
  }
}

class DebitCardPaymentStrategy extends PaymentStrategy {
  processPayment(amount) {
    console.log(`Processing debit card payment of amount ${amount}Rs`);
  }
}

class PaypalPaymentStrategy extends PaymentStrategy {
  processPayment(amount) {
    console.log(`Processing Paypal payment of amount ${amount}Rs`);
  }
}

class PaymentProcessor {
  constructor(paymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  processPayment(amount) {
    this.paymentStrategy.processPayment(amount);
  }
}

const paypal = new PaypalPaymentStrategy();
const payment = new PaymentProcessor(paypal);
payment.processPayment(30);
