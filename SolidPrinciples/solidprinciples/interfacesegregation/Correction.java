package solidprinciples.interfacesegregation;

interface Printable {
    void print();
}

interface Available {
    void email();
}

interface Payable {
    void schedulePayment();
}

class BasicInvoice implements Printable {
    public void print() {
        System.out.println("Printing basic invoice...");
    }
}

class AdvancedInvoice implements Printable, Available, Payable {
    public void print() {
        System.out.println("Printing advanced invoice...");
    }

    public void email() {
        System.out.println("Emailing invoice...");
    }

    public void schedulePayment() {
        System.out.println("Scheduling payment...");
    }
}

public class Correction {
    public static void main(String[] args) {
        Printable invoice = new BasicInvoice();
        invoice.print();
    }
}