package solidprinciples.openclosed.violated;

public class ViolationMain {
    public static void main(String[] args) {
        InvoiceO invoice = new InvoiceO();
        System.out.println("Total: " + invoice.calculateTotal("Premium"));
    }
}