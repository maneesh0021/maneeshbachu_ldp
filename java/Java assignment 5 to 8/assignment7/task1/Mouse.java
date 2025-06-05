package javaassignments.assignment7.task1;

class Mouse extends Rodent {
    Mouse() {
        System.out.println("Mouse created");
    }

    @Override
    void eat() {
        System.out.println("Mouse eats cheese");
    }

    @Override
    void sleep() {
        System.out.println("Mouse sleeps in a hole");
    }
}