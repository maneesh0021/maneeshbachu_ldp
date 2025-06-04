package solidprinciples.singleresponsibility.violated;

public class ViolationMain {
    public static void main(String[] args) {
        InvoiceS invoice = new InvoiceS();
        invoice.calculateTotal();
        invoice.printInvoice();
        invoice.saveToDB();
    }
}