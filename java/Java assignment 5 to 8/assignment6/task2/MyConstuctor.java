package javaassignments.assignment6.task2;
// Program to demonstrate constructor chaining using 'this()' in Java.
class MyConstructor {
    MyConstructor() {
        this("Called from no-arg constructor");
    }

    MyConstructor(String message) {
        System.out.println("Message: " + message);
    }

    public static void main(String[] args) {
        MyConstructor obj = new MyConstructor();
    }
}
