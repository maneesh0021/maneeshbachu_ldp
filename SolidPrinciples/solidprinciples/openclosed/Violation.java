package solidprinciples.openclosed;

class InvoiceO {
    public double calculateTotal(String customerType) {
        if (customerType.equals("Regular")) {
            return 100;
        } else if (customerType.equals("Premium")) {
            return 80;
        } else {
            return 120;
        }
    }
}

public class Violation {
    public static void main(String[] args) {
        InvoiceO invoice = new InvoiceO();
        System.out.println("Total: " + invoice.calculateTotal("Premium"));
    }
}