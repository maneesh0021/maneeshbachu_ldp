public class FibonacciIterative {
    public static void main(String[] args) {
        int n = 10; // Change this value to generate more terms
        System.out.println("Fibonacci Series (Iterative):");
        printFibonacci(n);
    }

    public static void printFibonacci(int n) {
        int first = 0, second = 1;
        System.out.print(first + " " + second + " ");
        
        for (int i = 2; i < n; i++) {
            int next = first + second;
            System.out.print(next + " ");
            first = second;
            second = next;
        }
    }
}
