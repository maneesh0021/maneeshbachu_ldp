package solidprinciples.dependencyinversion.corrected;

public class SQLInvoiceRepository implements InvoiceRepository {
    @Override
    public void save() {
        System.out.println("Saving invoice to SQL DB...");
    }
}