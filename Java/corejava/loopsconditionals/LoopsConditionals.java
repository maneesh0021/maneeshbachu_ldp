package corejava.loopsconditionals;

public class LoopsConditionals {
    public static void main(String[] args) {
        int num = 7;

        if (num %2 ==0) {
            System.out.println("Even number");
        } else {
            System.out.println("Odd number");
        }

        System.out.println("Numbers 1 to 5:");
        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
        }
    }
}
