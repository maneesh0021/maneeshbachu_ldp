package solidprinciples.liskov.violated;

public class OnlineInvoiceL extends InvoiceL {
    @Override
    public void generateInvoice() {
        System.out.println("Online Invoice Generated");
    }
}