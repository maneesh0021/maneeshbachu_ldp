package solidprinciples.singleresponsibility.corrected;

public class InvoiceRepository {
    public void save() {
        System.out.println("Saving invoice to DB...");
    }
}