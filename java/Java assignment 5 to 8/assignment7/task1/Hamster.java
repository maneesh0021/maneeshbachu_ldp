package javaassignments.assignment7.task1;

class Hamster extends Rodent {
    Hamster() {
        System.out.println("Hamster created");
    }

    @Override
    void eat() {
        System.out.println("Hamster eats fruits");
    }

    @Override
    void sleep() {
        System.out.println("Hamster sleeps in a cage");
    }
}