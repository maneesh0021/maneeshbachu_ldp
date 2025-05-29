package solidprinciples.singleresponsibility;

class Invoice {
    public void calculateTotal() {
        System.out.println("Calculating total amount...");
    }
}

class InvoicePrinter {
    public void print() {
        System.out.println("Printing invoice...");
    }
}

class InvoiceRepository {
    public void save() {
        System.out.println("Saving invoice to DB...");
    }
}

public class Correction {
    public static void main(String[] args) {
        Invoice invoice = new Invoice();
        invoice.calculateTotal();

        InvoicePrinter printer = new InvoicePrinter();
        printer.print();

        InvoiceRepository repository = new InvoiceRepository();
        repository.save();
    }
}