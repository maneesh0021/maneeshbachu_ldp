package solidprinciples.openclosed.violated;

public class InvoiceO {
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