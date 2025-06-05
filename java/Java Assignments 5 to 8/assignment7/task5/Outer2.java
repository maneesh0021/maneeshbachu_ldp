package javaassignments.assignment7.task5;

class Outer2 {
    class Inner2 extends Outer1.Inner1 {
        Inner2(Outer1 outer1, String message) {
            outer1.super(message);
            System.out.println("Inner2 Constructor");
        }
    }
}