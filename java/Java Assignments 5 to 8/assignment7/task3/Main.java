package javaassignments.assignment7.task3;
// Demonstrates multiple interface inheritance and method usage via interface references.

public class Main {
    static void takeInterface1(Interface1 i) {
        i.methodA();
        i.methodB();
    }

    static void takeInterface2(Interface2 i) {
        i.methodC();
        i.methodD();
    }

    static void takeInterface3(Interface3 i) {
        i.methodE();
        i.methodF();
    }

    static void takeCombinedInterface(CombinedInterface i) {
        i.methodG();
    }

    public static void main(String[] args) {
        ImplementingClass obj = new ImplementingClass();

        takeInterface1(obj);
        takeInterface2(obj);
        takeInterface3(obj);
        takeCombinedInterface(obj);
    }
}