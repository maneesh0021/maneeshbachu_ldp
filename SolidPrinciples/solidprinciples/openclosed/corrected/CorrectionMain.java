package solidprinciples.openclosed.corrected;

public class CorrectionMain {
    public static void main(String[] args) {
        InvoicePrinter printer = new InvoicePrinter();
        printer.print(new PDFInvoice());
        printer.print(new HTMLInvoice());
    }
}