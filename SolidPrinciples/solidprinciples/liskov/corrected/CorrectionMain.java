package solidprinciples.liskov.corrected;

public class CorrectionMain {
    public static void main(String[] args) {
        Invoice invoice1 = new OnlineInvoice();
        invoice1.generateInvoice();

        Invoice invoice2 = new StoreInvoice();
        invoice2.generateInvoice();
    }
}