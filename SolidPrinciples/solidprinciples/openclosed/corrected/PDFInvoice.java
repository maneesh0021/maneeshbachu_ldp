package solidprinciples.openclosed.corrected;

public class PDFInvoice implements PrintableInvoice {
    @Override
    public void print() {
        System.out.println("Printing Invoice in PDF...");
    }
}