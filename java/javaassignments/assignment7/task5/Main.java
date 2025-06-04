package javaassignments.assignment7.task5;
// Demonstrates creation and interaction of inner classes across different outer classes.
public class Main {
    public static void main(String[] args) {
        Outer1 outer1 = new Outer1();
        Outer1.Inner1 inner1 = outer1.new Inner1("Hello from Inner1");

        Outer2 outer2 = new Outer2();
        Outer2.Inner2 inner2 = outer2.new Inner2(outer1, "Hello from Inner2");
    }
}