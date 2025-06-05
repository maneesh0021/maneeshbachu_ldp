package javaassignments.assignment6.task4;

public class MessageManager {
    public void initializeMessages() {
        MessagePrinter[] messages = new MessagePrinter[5];

        for (int i = 0; i < messages.length; i++) {
            messages[i] = new MessagePrinter("Message " + (i + 1));
        }
    }
}