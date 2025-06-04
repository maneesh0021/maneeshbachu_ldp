package javaassignments.assignment7.task2;
// Demonstrates down casting to access subclass-specific methods in a polymorphic array.

public class Main {
    public static void main(String[] args) {
        Cycle[] cycles = {
                new Unicycle(),
                new Bicycle(),
                new Tricycle()
        };

        // Down casting to access balance() in Unicycle and Bicycle
        ((Unicycle) cycles[0]).balance();
        ((Bicycle) cycles[1]).balance();

        // ((Tricycle) cycles[2]).balance(); // This would cause a compile-time error
    }
}