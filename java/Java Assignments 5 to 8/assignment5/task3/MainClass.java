package javaassignments.assignment5.task3;

import javaassignments.assignment5.task1.DefaultInitializationAssignment;
import javaassignments.assignment5.task2.SingletonClass;

public class MainClass {

    public static void main(String[] args) {
        // Create object of first class
        DefaultInitializationAssignment obj1 = new DefaultInitializationAssignment();

        // Call method to print member variables
        obj1.printMemberVariables();

        // Call method to print local variables (with initialization)
        obj1.printLocalVariables();

        // Create object of second class using static method
        SingletonClass obj2 = SingletonClass.getInstance("Hello Singleton!");

        // Call non-static method to print the String
        obj2.printText();
    }
}