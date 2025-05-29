package solidprinciples.interfacesegregation;

interface InvoiceOperations {
    void calculateTotal();
    void printInvoice();
    void emailInvoice();
    void downloadPDF();
}

class SimpleInvoice implements InvoiceOperations {
    public void calculateTotal() {
        System.out.println("Total calculated");
    }

    public void printInvoice() {
        System.out.println("Printed invoice");
    }

    public void emailInvoice() {
        throw new UnsupportedOperationException("Not supported");
    }

    public void downloadPDF() {
        throw new UnsupportedOperationException("Not supported");
    }
}

public class Violation {
    public static void main(String[] args) {
        InvoiceOperations invoice = new SimpleInvoice();
        invoice.calculateTotal();
        invoice.printInvoice();

    }
}