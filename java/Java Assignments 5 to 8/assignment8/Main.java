package javaassignments.assignment8;
// Program demonstrating custom exception handling with try-catch-finally blocks.

public class Main {
    public static void main(String[] args) {
        ExceptionThrower thrower = new ExceptionThrower();

        try {
            thrower.throwExceptions(4);
        } catch (Exception e) {
            System.out.println("Caught an exception: " + e);
        } finally {
            System.out.println("Finally block is always executed.");
        }
    }
}