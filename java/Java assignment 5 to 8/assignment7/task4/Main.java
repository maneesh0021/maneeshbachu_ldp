package javaassignments.assignment7.task4;
// Demonstrates use of Factory Design Pattern to create and ride different types of cycles.
public class Main {
    public static void rideCycle(CycleFactory factory) {
        Cycle c = factory.getCycle();
        c.ride();
    }

    public static void main(String[] args) {
        rideCycle(new UnicycleFactory());
        rideCycle(new BicycleFactory());
        rideCycle(new TricycleFactory());
    }
}