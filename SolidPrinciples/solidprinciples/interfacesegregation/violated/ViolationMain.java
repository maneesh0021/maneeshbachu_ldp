package solidprinciples.interfacesegregation.violated;

public class ViolationMain {
    public static void main(String[] args) {
        InvoiceOperations invoice = new SimpleInvoice();
        invoice.calculateTotal();
        invoice.printInvoice();
    }
}