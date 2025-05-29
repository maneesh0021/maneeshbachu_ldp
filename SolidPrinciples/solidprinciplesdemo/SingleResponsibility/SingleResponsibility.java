package solidprinciplesdemo.SingleResponsibility;

class Employee {
    String name;

    Employee(String name) {
        this.name = name;
    }
}

class EmployeePrinter {
    void print(Employee e) {
        System.out.println("Employee: " + e.name);
    }
}

public class SingleResponsibility {
    public static void main(String[] args) {
        Employee e = new Employee("Maneesh");
        EmployeePrinter printer = new EmployeePrinter();
        printer.print(e);
    }
}
