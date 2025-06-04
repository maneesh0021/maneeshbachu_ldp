package solidprinciples.dependencyinversion.violated;

public class ViolationMain {
    public static void main(String[] args) {
        Invoice invoice = new Invoice();
        invoice.saveToSQL();
    }
}