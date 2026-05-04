// Solution -> This sender class is no more tightly coupled with types of notification.

import { Notification } from "./Notification";

export class NotificationSender {
    sendNotification(notifications: Notification[], message: string) {
        for(const notification of notifications) notification.sendMessage(message);
    }
};