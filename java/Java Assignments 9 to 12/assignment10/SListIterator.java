package javaassignments.assignment10;

public class SListIterator<T> {
    private final SList.Link<T> head;
    private SList.Link<T> current;
    private SList.Link<T> lastReturned;

    public SListIterator(SList.Link<T> head) {
        this.head = head;
        this.current = head;
    }

    public boolean hasNext() {
        return current.next != null;
    }

    public T next() {
        lastReturned = current.next;
        current = current.next;
        return current.data;
    }

    public void insert(T data) {
        current.next = new SList.Link<>(data, current.next);
        current = current.next;
        lastReturned = null;
    }

    public void remove() {
        if (lastReturned == null) {
            throw new IllegalStateException("You must call next() before remove()");
        }

        SList.Link<T> temp = head;
        while (temp.next != lastReturned) {
            temp = temp.next;
        }

        temp.next = lastReturned.next;
        lastReturned = null;
    }
}