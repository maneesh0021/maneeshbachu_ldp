package solidprinciples.singleresponsibility.violated;

public class InvoiceS {
    public void calculateTotal() {
        System.out.println("Calculating total amount...");
    }

    public void printInvoice() {
        System.out.println("Printing invoice...");
    }

    public void saveToDB() {
        System.out.println("Saving invoice to DB...");
    }
}