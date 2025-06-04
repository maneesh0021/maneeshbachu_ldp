package javaassignments.assignment2;
//Checks if the input string contains all the letters of the alphabet (a-z), case-insensitive.

import java.util.HashSet;
import java.util.Scanner;

public class AlphabetChecker {
    public static boolean hasAllLetters(String str) {
        str = str.toLowerCase();
        HashSet<Character> set = new HashSet<>();

        for (char ch : str.toCharArray()) {
            if (ch >= 'a' && ch <= 'z') {
                set.add(ch);
            }
        }
        return set.size() == 26;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a sentence:");
        String input = sc.nextLine();

        boolean result = hasAllLetters(input);
        System.out.println(result);
    }
}

