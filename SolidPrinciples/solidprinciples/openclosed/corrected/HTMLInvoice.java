package solidprinciples.openclosed.corrected;

public class HTMLInvoice implements PrintableInvoice {
    @Override
    public void print() {
        System.out.println("Printing Invoice in HTML...");
    }
}