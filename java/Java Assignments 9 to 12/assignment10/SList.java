package javaassignments.assignment10;

public class SList<T> {
    final Link<T> head = new Link<>(null, null); // Dummy header node

    public SListIterator<T> iterator() {
        return new SListIterator<>(head);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        SListIterator<T> it = iterator();
        while (it.hasNext()) {
            sb.append(it.next()).append(" ");
        }
        return sb.toString();
    }

    static class Link<T> {
        T data;
        Link<T> next;

        Link(T data, Link<T> next) {
            this.data = data;
            this.next = next;
        }
    }
}