package solidprinciplesdemo.dependencyinversion;

interface Keyboard {
    String getInput();
}

class WiredKeyboard implements Keyboard {
    public String getInput() {
        return "Typing on wired keyboard";
    }
}

class Computer {
    private final Keyboard keyboard;

    Computer(Keyboard keyboard) {
        this.keyboard = keyboard;
    }

    void type() {
        System.out.println(keyboard.getInput());
    }
}

public class DependencyInversion {
    public static void main(String[] args) {
        Keyboard keyboard = new WiredKeyboard();
        Computer computer = new Computer(keyboard);
        computer.type();
    }
}
