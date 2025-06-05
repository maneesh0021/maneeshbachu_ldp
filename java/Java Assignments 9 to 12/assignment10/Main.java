package javaassignments.assignment10;
// Program demonstrating a custom generic singly linked list with insert, iterate, and remove functionalities.

public class Main {
    public static void main(String[] args) {
        SList<String> myList = new SList<>();
        SListIterator<String> it = myList.iterator();

        it.insert("Apple");
        it.insert("Banana");
        it.insert("Cherry");

        System.out.println("List after inserting 3 elements:");
        System.out.println(myList);

        it = myList.iterator();
        it.next();
        it.remove();

        System.out.println("List after removing first element:");
        System.out.println(myList);
    }
}