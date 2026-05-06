import CreditCard from "./CreditCard";

export default class MasterCardCreditCard extends CreditCard {
    constructor(cardNumber: string, cardHolder: string, expiryDate: string, cvv: number) {
        super(cardNumber, cardHolder, expiryDate, cvv);
    }

    swipeAndPay(): void {
        console.log("Swipe and pay with Mastercard");
    }

    doRefund(): void {
        console.log("Do refund with Mastercard");
    }

    onlinePayment(): void {
        console.log("Online payment with Mastercard");
    }

    tapAndPay(): void {
        console.log("Tap and pay with Mastercard");
    }

    upiPayment(): void {
        console.log("UPI payment with Mastercard");
    }

    intlPayment(): void {
        console.log("International payment with Mastercard");
    }
}