// DIP -> Dependency Inversion Principle

// In this example, changing from Stripe API to Paypal API is very painful because we have to edit our stripe code all over the Store class.

/*
class Store {
  constructor(user) {
    this.paypal = new Paypal();
    this.user = user;
    // this.stripe = new Stripe(user);
  }

  purchaseBike(quantity) {
    this.paypal.makePayment(this.user, 200 * quantity);
    // this.stripe.makePayment(200 * quantity * 100);
  }

  purchaseHelmet(quantity) {
    this.paypal.makePayment(this.user, 15 * quantity);
    // this.stripe.makePayment(15 * quantity * 100);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }

  makePayment(amountInCents) {
    console.log(
      `${this.user} made payment of $${amountInCents / 100} with Stripe`
    );
  }
}

class Paypal {
  makePayment(user, amountInDollars) {
    console.log(`${user} made payment of $${amountInDollars} with Paypal`);
  }
}
*/

class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  purchaseBike(quantity) {
    this.paymentProcessor.pay(200 * quantity);
  }

  purchaseHelmet(quantity) {
    this.paymentProcessor.pay(15 * quantity);
  }
}

class StripePaymentProcessor {
  constructor(user) {
    this.stripe = new Stripe(user);
  }

  pay(amountInCents) {
    this.stripe.makePayment(amountInCents * 100);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }

  makePayment(amountInCents) {
    console.log(
      `${this.user} made payment of $${amountInCents / 100} with Stripe`
    );
  }
}

const store = new Store(new StripePaymentProcessor("John"));
store.purchaseBike(2);
store.purchaseHelmet(2);
