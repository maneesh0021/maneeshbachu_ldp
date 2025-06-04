package solidprinciples.interfacesegregation.violated;

public class SimpleInvoice implements InvoiceOperations {
    @Override
    public void calculateTotal() {
        System.out.println("Total calculated");
    }

    @Override
    public void printInvoice() {
        System.out.println("Printed invoice");
    }

    @Override
    public void emailInvoice() {
        throw new UnsupportedOperationException("Not supported");
    }

    @Override
    public void downloadPDF() {
        throw new UnsupportedOperationException("Not supported");
    }
}