import { Employee } from "./Employee";

export class EmployeePerformanceReportGenerator {
    printPerformanceReport(employee: Employee) {
        console.log("Performance report of employee : ", employee.getEmployeeName());
    }
};