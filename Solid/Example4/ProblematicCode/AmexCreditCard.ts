import CreditCard from "./CreditCard";

export default class AmexCreditCard extends CreditCard {
    constructor(cardNumber: string, cardHolder: string, expiryDate: string, cvv: number) {
        super(cardNumber, cardHolder, expiryDate, cvv);
    }

    swipeAndPay(): void {
        console.log("Swipe and pay with Amex card");
    }

    doRefund(): void {
        console.log("Do refund with Amex card");
    }

    onlinePayment(): void {
        console.log("Online payment with Amex card");
    }

    tapAndPay(): void {
        console.log("Tap and pay with Amex card");
    }

    upiPayment(): void {
        console.log("UPI payment with Amex card");
    }

    intlPayment(): void {
        console.log("International payment with Amex card");
    }
}