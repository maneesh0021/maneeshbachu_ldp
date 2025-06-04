package solidprinciples.interfacesegregation.corrected;

public class BasicInvoice implements Printable {
    @Override
    public void print() {
        System.out.println("Printing basic invoice...");
    }
}