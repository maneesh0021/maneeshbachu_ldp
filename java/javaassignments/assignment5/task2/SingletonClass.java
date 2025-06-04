package javaassignments.assignment5.task2;
// Program to demonstrate a simple singleton-style class with private constructor and static factory method.

    public class SingletonClass {

        // Non-static member variable
        private String text;

        // Private constructor to prevent direct instantiation (singleton style)
        private SingletonClass(String text) {
            this.text = text;
        }

        // Static method to create an object and initialize the member variable
        public static SingletonClass getInstance(String text) {
            // Create new object with text initialized
            return new SingletonClass(text);
        }

        // Non-static method to print the String
        public void printText() {
            System.out.println("String member variable: " + text);
        }
    }