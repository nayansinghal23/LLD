import CreditCard from "./CreditCard";

export default class VisaCreditCard extends CreditCard {
    constructor(cardNumber: string, cardHolder: string, expiryDate: string, cvv: number) {
        super(cardNumber, cardHolder, expiryDate, cvv);
    }

    swipeAndPay(): void {
        console.log("Swipe and pay with Visa card");
    }

    doRefund(): void {
        console.log("Do refund with Visa card");
    }

    onlinePayment(): void {
        console.log("Online payment with Visa card");
    }

    tapAndPay(): void {
        console.log("Tap and pay with Visa card");
    }

    upiPayment(): void {
        console.log("UPI payment with Visa card");
    }

    intlPayment(): void {
        console.log("International payment with Visa card");
    }
}