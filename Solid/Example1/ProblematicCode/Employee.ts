// Problem - This class is trying to do too many things. Means you have multiple reasons to change the class. This violets SRP.

export class Employee {
    id: number = 0;
    name: string = '';
    address: string = '';

    constructor(id: number, name: string, address: string) {
        this.id = id;
        this.name = name;
        this.address = address;
    }

    printPerformanceReport(name: string) {
        console.log("Performance report of employee : ", name);
    }

    computeSalary() {
        return 1000.0;
    }

    updateEmployeeData() {
        console.log("Employee data updated successfully");
    }

    fetchEmployeeData() {
        console.log("Employee data fetched successfully");
    }
}