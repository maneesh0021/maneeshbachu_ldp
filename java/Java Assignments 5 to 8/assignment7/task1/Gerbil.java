package javaassignments.assignment7.task1;

class Gerbil extends Rodent {
    Gerbil() {
        System.out.println("Gerbil created");
    }

    @Override
    void eat() {
        System.out.println("Gerbil eats seeds");
    }

    @Override
    void sleep() {
        System.out.println("Gerbil sleeps in a burrow");
    }
}