package solidprinciples.liskov;

class Invoice {
    public void generateInvoice() {
        System.out.println("Generic Invoice Generated");
    }
}

class OnlineInvoice extends Invoice {
    @Override
    public void generateInvoice() {
        System.out.println("Online Invoice Generated");
    }
}

class StoreInvoice extends Invoice {
    @Override
    public void generateInvoice() {
        System.out.println("Store Invoice Generated");
    }
}

public class Correction {
    public static void main(String[] args) {
        Invoice invoice1 = new OnlineInvoice();
        invoice1.generateInvoice();

        Invoice invoice2 = new StoreInvoice();
        invoice2.generateInvoice();
    }
}