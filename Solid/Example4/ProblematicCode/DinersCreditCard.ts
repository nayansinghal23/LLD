import CreditCard from "./CreditCard";

export default class DinersCreditCard extends CreditCard {
    constructor(cardNumber: string, cardHolder: string, expiryDate: string, cvv: number) {
        super(cardNumber, cardHolder, expiryDate, cvv);
    }

    swipeAndPay(): void {
        console.log("Swipe and pay with Diners card");
    }

    doRefund(): void {
        console.log("Do refund with Diners card");
    }

    onlinePayment(): void {
        console.log("Online payment with Diners card");
    }

    tapAndPay(): void {
        console.log("Tap and pay with Diners card");
    }

    upiPayment(): void {
        console.log("UPI payment with Diners card");
    }

    intlPayment(): void {
        console.log("International payment with Diners card");
    }
}