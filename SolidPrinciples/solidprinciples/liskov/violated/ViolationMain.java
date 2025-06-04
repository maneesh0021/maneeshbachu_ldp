package solidprinciples.liskov.violated;

public class ViolationMain {
    public static void main(String[] args) {
        InvoiceL invoice = new OnlineInvoiceL();
        invoice.generateInvoice();
    }
}