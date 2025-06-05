package javaassignments.assignment7.task1;

abstract class Rodent {
    Rodent() {
        System.out.println("Rodent created");
    }

    abstract void eat();
    abstract void sleep();
}