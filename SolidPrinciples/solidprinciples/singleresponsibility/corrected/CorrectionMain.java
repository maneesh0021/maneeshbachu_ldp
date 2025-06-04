package solidprinciples.singleresponsibility.corrected;

public class CorrectionMain {
    public static void main(String[] args) {
        Invoice invoice = new Invoice();
        invoice.calculateTotal();

        InvoicePrinter printer = new InvoicePrinter();
        printer.print();

        InvoiceRepository repository = new InvoiceRepository();
        repository.save();
    }
}