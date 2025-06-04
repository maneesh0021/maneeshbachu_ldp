package corejava.collection1;

import java.util.*;

public class CollectionsExample {
    public static void main(String[] args) {

        // ---------- LIST ----------
        List<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Apple"); // duplicates allowed
        System.out.println("List (ArrayList): " + fruits);

        // ---------- SET ----------
        Set<String> uniqueFruits = new HashSet<>();
        uniqueFruits.add("Apple");
        uniqueFruits.add("Banana");
        uniqueFruits.add("Apple"); // duplicate ignored
        System.out.println("Set (HashSet): " + uniqueFruits);

        // ---------- TREE SET ----------
        Set<String> sortedFruits = new TreeSet<>();
        sortedFruits.add("Banana");
        sortedFruits.add("Apple");
        sortedFruits.add("Mango");
        System.out.println("Set (TreeSet - Sorted): " + sortedFruits);

        // ---------- QUEUE using LinkedList ----------
        Queue<String> queue = new LinkedList<>();
        queue.offer("First");
        queue.offer("Second");
        queue.offer("Third");
        System.out.println("Queue (LinkedList): " + queue);
        System.out.println("Removed from queue: " + queue.poll());

        // ---------- QUEUE using PriorityQueue ----------
        Queue<Integer> pq = new PriorityQueue<>();
        pq.offer(30);
        pq.offer(10);
        pq.offer(20);
        System.out.println("Queue (PriorityQueue): " + pq);
        System.out.println("Removed from priority queue: " + pq.poll());

        // ---------- MAP (HashMap) ----------
        Map<Integer, String> idName = new HashMap<>();
        idName.put(1, "Maneesh");
        idName.put(2, "Tony");
        idName.put(3, "hulk"); // values can be duplicate
        System.out.println("Map (HashMap): " + idName);

        // ---------- MAP (TreeMap) ----------
        Map<Integer, String> sortedMap = new TreeMap<>();
        sortedMap.put(3, "Cat");
        sortedMap.put(1, "Apple");
        sortedMap.put(2, "Ball");
        System.out.println("Map (TreeMap - Sorted): " + sortedMap);

        // ---------- MAP (LinkedHashMap) ----------
        Map<Integer, String> orderedMap = new LinkedHashMap<>();
        orderedMap.put(10, "One");
        orderedMap.put(5, "Two");
        orderedMap.put(20, "Three");
        System.out.println("Map (LinkedHashMap - Insertion Order): " + orderedMap);
    }
}