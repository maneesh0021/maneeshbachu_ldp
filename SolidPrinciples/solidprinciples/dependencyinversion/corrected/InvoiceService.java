package solidprinciples.dependencyinversion.corrected;

public class InvoiceService {
    private InvoiceRepository repository;

    public InvoiceService(InvoiceRepository repository) {
        this.repository = repository;
    }

    public void saveInvoice() {
        repository.save();
    }
}