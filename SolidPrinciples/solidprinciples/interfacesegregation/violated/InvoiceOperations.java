package solidprinciples.interfacesegregation.violated;

public interface InvoiceOperations {
    void calculateTotal();
    void printInvoice();
    void emailInvoice();
    void downloadPDF();
}