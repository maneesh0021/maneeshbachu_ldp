package solidprinciples.openclosed;

interface PrintableInvoice {
    void print();
}

class PDFInvoice implements PrintableInvoice {
    public void print() {
        System.out.println("Printing Invoice in PDF...");
    }
}

class HTMLInvoice implements PrintableInvoice {
    public void print() {
        System.out.println("Printing Invoice in HTML...");
    }
}

class InvoicePrinter {
    public void print(PrintableInvoice invoice) {
        invoice.print();
    }
}

public class Correction {
    public static void main(String[] args) {
        InvoicePrinter printer = new InvoicePrinter();
        printer.print(new PDFInvoice());
        printer.print(new HTMLInvoice());
    }
}