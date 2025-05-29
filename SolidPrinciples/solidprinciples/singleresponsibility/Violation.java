package solidprinciples.singleresponsibility;

class InvoiceS {
    public void calculateTotal() {
        System.out.println("Calculating total amount...");
    }

    public void printInvoice() {
        System.out.println("Printing invoice...");
    }

    public void saveToDB() {
        System.out.println("Saving invoice to DB...");
    }
}

public class Violation {
    public static void main(String[] args) {
        InvoiceS invoice = new InvoiceS();
        invoice.calculateTotal();
        invoice.printInvoice();
        invoice.saveToDB();
    }
}