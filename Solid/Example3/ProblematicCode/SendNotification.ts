// Problem -> Violets SRP

export class SendNotification {
    sendSMSNotification(message: string) {
        console.log("SMS : ", message);
    }

    sendEmailNotification(message: string) {
        console.log("Email : ", message);
    }

    sendPushNotification(message: string) {
        console.log("Push : ", message);
    }
    
    sendWhatsAppNotification(message: string) {
        console.log("WhatsApp : ", message);
    }
};