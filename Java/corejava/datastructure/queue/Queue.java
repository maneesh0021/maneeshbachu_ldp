package corejava.datastructure.queue;



import java.util.ArrayList;



public class Queue<T> {

    private ArrayList<T> elements = new ArrayList<>();


    public void add(T item) {

        elements.add(item);

    }


    public T remove() {

        if (!isEmpty()) {

            return elements.remove(0);

        }

        return null;

    }



    // Check if the queue is empty

    public Boolean isEmpty() {

        return elements.isEmpty();

    }


    public static void main(String[] args) {

        Queue<String> customerQueue = new Queue<>();

        customerQueue.add("Customer 1");

        customerQueue.add("Customer 2");

        customerQueue.add("Customer 3");


        while (!customerQueue.isEmpty()) {

            System.out.println("Serving: " + customerQueue.remove());

        }

    }

}