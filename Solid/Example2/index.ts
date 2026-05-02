import { ActivityLogger } from "./BetterCode/ActivityLogger";
import { User } from "./BetterCode/User";
import { UserManager } from "./BetterCode/UserManager";

function driver() {
    const user1 = new User(18);
    const user2 = new User(12);

    const userManager = new UserManager()
    const activityLogger = new ActivityLogger();

    activityLogger.logUserActivity(user1);
    activityLogger.logUserActivity(user2);
}

driver();