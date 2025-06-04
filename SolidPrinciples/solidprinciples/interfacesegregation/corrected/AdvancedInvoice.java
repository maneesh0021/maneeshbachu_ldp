package solidprinciples.interfacesegregation.corrected;

public class AdvancedInvoice implements Printable, Available, Payable {
    @Override
    public void print() {
        System.out.println("Printing advanced invoice...");
    }

    @Override
    public void email() {
        System.out.println("Emailing invoice...");
    }

    @Override
    public void schedulePayment() {
        System.out.println("Scheduling payment...");
    }
}