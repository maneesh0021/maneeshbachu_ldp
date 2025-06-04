package solidprinciples.dependencyinversion.corrected;

public class CorrectionMain {
    public static void main(String[] args) {
        InvoiceRepository repository = new SQLInvoiceRepository();
        InvoiceService service = new InvoiceService(repository);
        service.saveInvoice();
    }
}