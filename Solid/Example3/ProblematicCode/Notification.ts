// Problem -> A lot of if-else, thus violets OCP. This class will be modified everytime we introduce / remove any notification type.

import { NotificationType } from "./enums";
import { SendNotification } from "./SendNotification";

export class Notification {
    sendNotification(notificationTypes: NotificationType[], message: string) {
        const sendNotification = new SendNotification();

        for(const notificationType of notificationTypes) {
            switch(notificationType) {
                case NotificationType.SMS:
                    sendNotification.sendSMSNotification(message);
                    break;
                case NotificationType.EMAIL:
                    sendNotification.sendEmailNotification(message);
                    break;
                case NotificationType.PUSH:
                    sendNotification.sendPushNotification(message);
                    break;
                case NotificationType.WHATSAPP:
                    sendNotification.sendWhatsAppNotification(message);
                    break;
            }
        }
    }
};