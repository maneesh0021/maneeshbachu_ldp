package solidprinciples.dependencyinversion;

interface InvoiceRepository {
    void save();
}

class SQLInvoiceRepository implements InvoiceRepository {
    public void save() {
        System.out.println("Saving invoice to SQL DB...");
    }
}

class InvoiceService {
    private InvoiceRepository repository;

    public InvoiceService(InvoiceRepository repository) {
        this.repository = repository;
    }

    public void saveInvoice() {
        repository.save();
    }
}

public class Correction {
    public static void main(String[] args) {
        InvoiceRepository repository = new SQLInvoiceRepository();
        InvoiceService service = new InvoiceService(repository);
        service.saveInvoice();
    }
}