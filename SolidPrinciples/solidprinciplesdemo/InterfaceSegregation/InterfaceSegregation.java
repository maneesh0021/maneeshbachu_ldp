package solidprinciplesdemo.InterfaceSegregation;

interface Printer {
    void print();
}

class BasicPrinter implements Printer {
    public void print() {
        System.out.println("Printing document...");
    }
}

public class InterfaceSegregation {
    public static void main(String[] args) {
        Printer printer = new BasicPrinter();
        printer.print();
    }
}

