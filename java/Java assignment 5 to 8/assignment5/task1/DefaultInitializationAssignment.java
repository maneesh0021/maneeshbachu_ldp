package javaassignments.assignment5.task1;
// Program to demonstrate default initialization of member variables and the need to initialize local variables in Java.

public class DefaultInitializationAssignment {

    // Member variables with default initialization
    int number;      // default value: 0
    char character;  // default value: '\u0000'

    // Method to print member variables
    public void printMemberVariables() {
        System.out.println("Member int variable (default initialized): " + number);
        System.out.println("Member char variable (default initialized): '" + character + "'");
    }

    // Method to demonstrate that local variables must be initialized before use
    public void printLocalVariables() {
        // Local variables must be initialized; otherwise, it results in a compile-time error
        int localNumber = 0;
        char localChar = '\u0000';

        System.out.println("Local int variable (initialized): " + localNumber);
        System.out.println("Local char variable (initialized): '" + localChar + "'");
    }
}
