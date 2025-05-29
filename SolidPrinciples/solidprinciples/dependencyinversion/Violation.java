package solidprinciples.dependencyinversion;

class Invoice {
    public void saveToSQL() {
        System.out.println("Saving invoice to SQL DB...");
    }
}


public class Violation {
    public static void main(String[] args) {
        Invoice invoice = new Invoice();
        invoice.saveToSQL();
    }
}