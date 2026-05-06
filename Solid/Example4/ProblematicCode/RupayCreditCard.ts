import CreditCard from "./CreditCard";

export default class RupayCreditCard extends CreditCard {
    constructor(cardNumber: string, cardHolder: string, expiryDate: string, cvv: number) {
        super(cardNumber, cardHolder, expiryDate, cvv);
    }

    swipeAndPay(): void {
        console.log("Swipe and pay with Rupay card");
    }

    doRefund(): void {
        console.log("Do refund with Rupay card");
    }

    onlinePayment(): void {
        console.log("Online payment with Rupay card");
    }

    tapAndPay(): void {
        console.log("Tap and pay with Rupay card");
    }

    upiPayment(): void {
        console.log("UPI payment with Rupay card");
    }

    intlPayment(): void {
        console.log("International payment with Rupay card");
    }
}