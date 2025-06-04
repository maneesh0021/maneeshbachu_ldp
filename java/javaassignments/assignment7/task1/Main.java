package javaassignments.assignment7.task1;
// Demonstrates polymorphism using an array of Rodent types and overridden methods in subclasses.

public class Main {
    public static void main(String[] args) {
        Rodent[] rodents = {
                new Mouse(),
                new Gerbil(),
                new Hamster()
        };

        for (Rodent r : rodents) {
            r.eat();
            r.sleep();
        }
    }
}