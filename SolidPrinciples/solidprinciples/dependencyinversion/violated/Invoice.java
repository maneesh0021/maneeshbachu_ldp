package solidprinciples.dependencyinversion.violated;

public class Invoice {
    public void saveToSQL() {
        System.out.println("Saving invoice to SQL DB...");
    }
}