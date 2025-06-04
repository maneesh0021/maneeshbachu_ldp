package corejava.datastructure.linkedlist;

import java.util.LinkedList;

public class LinkedListD{
    public static void main(String[] args) {
        LinkedList<String> list = new LinkedList<>();
        list.add("Maneesh");
        list.add("Java");
        list.add("DS");
        for (String item : list) {
            System.out.println(item);
        }
    }
}
