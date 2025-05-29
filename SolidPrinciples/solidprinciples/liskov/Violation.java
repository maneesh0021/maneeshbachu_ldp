package solidprinciples.liskov;

class InvoiceL {
    public void generateInvoice() {
        System.out.println("Invoice Generated");
    }
}

class OnlineInvoiceL extends InvoiceL {
    @Override
    public void generateInvoice() {
        System.out.println("Online Invoice Generated");
    }
}

public class Violation {
    public static void main(String[] args) {
        InvoiceL invoice = new OnlineInvoiceL();
        invoice.generateInvoice();
    }
}