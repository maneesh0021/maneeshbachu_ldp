package corejava.stack;

import java.util.ArrayList;

public class Stack<T> {
    private ArrayList<T> elements = new ArrayList<>();

    public void push(T item) {
        elements.add(item);
    }

    public T pop() {
        if (!isEmpty()) {
            return elements.remove(elements.size() - 1);
        }
        return null;
    }

    public T peek() {
        if (!isEmpty()) {
            return elements.get(elements.size() - 1);
        }
        return null;
    }

    public boolean isEmpty() {
        return elements.isEmpty();
    }

    public static void main(String[] args) {
        Stack<String> history = new Stack<>();

        history.push("Home Page");
        history.push("About Page");
        history.push("Contact Page");

        System.out.println("Current Page: " + history.peek());

        System.out.println("Going back from: " + history.pop());
        System.out.println("Current Page: " + history.peek());
    }
}