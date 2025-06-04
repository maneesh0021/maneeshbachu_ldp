package solidprinciplesdemo.LiskovSubstitution;

class Bird {
    void fly() {
        System.out.println("Bird can fly");
    }
}

class Sparrow extends Bird {
    @Override
    void fly() {
        System.out.println("Sparrow flying high");
    }
}

public class LiskovSubstitution {
    public static void main(String[] args) {
        Bird myBird = new Sparrow(); 
        myBird.fly(); 
    }
}

