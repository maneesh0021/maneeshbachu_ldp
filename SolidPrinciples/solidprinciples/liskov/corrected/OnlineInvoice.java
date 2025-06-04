package solidprinciples.liskov.corrected;

public class OnlineInvoice extends Invoice {
    @Override
    public void generateInvoice() {
        System.out.println("Online Invoice Generated");
    }
}