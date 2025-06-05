package javaassignments.assignment6.task1;
// This program prints the first 100 vampire numbers by checking factor pairs with digit permutations.

public class VampireNumbers {
    public static void main(String[] args) {
        int count = 0;
        long num = 10;

        while (count < 100) {
            if (isVampire(num)) {
                System.out.println((count + 1) + ": " + num);
                count++;
            }
            num++;
        }
    }

    public static boolean isVampire(long num) {
        String numStr = String.valueOf(num);
        if (numStr.length() % 2 != 0) return false;

        int len = numStr.length() / 2;
        long start = (long) Math.pow(10, len - 1);
        long end = (long) Math.pow(10, len);

        for (long i = start; i < end; i++) {
            if (num % i == 0) {
                long j = num / i;

                if (j >= start && j < end && !(i % 10 == 0 && j % 10 == 0)) {
                    String combined = i + "" + j;
                    char[] original = numStr.toCharArray();
                    char[] combinedArr = combined.toCharArray();
                    java.util.Arrays.sort(original);
                    java.util.Arrays.sort(combinedArr);

                    if (java.util.Arrays.equals(original, combinedArr)) {
                        return true;
                    }
                }
            }
        }

        return false;
    }
}
