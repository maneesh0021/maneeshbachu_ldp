package solidprinciples.interfacesegregation.corrected;

public class CorrectionMain {
    public static void main(String[] args) {
        Printable invoice = new BasicInvoice();
        invoice.print();
    }
}