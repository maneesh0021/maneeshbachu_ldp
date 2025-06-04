package solidprinciples.liskov.corrected;

public class StoreInvoice extends Invoice {
    @Override
    public void generateInvoice() {
        System.out.println("Store Invoice Generated");
    }
}