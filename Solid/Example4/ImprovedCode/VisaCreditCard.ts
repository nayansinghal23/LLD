import CreditCard from "./CreditCard";
import RefundCompatibleCreditCard from "./RefundCompatibleCreditCard";

export default class VisaCreditCard extends CreditCard implements RefundCompatibleCreditCard {
    constructor(cardNumber: string, cardHolder: string, expiryDate: string, cvv: number) {
        super(cardNumber, cardHolder, expiryDate, cvv);
    }

    swipeAndPay(): void {
        console.log("Swipe and pay with Visa card");
    }

    onlinePayment(): void {
        console.log("Online payment with Visa card");
    }

    tapAndPay(): void {
        console.log("Tap and pay with Visa card");
    }

    doRefund(): void {
        console.log("Do refund with Visa card");
    }
}