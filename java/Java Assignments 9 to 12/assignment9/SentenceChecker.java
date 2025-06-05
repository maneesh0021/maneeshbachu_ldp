package javaassignments.assignment9;
//Java program that uses a regular expression to check whether a sentence: Begins with a capital letter and Ends with a period (.)
import java.util.Scanner;
import java.util.regex.Pattern;

public class SentenceChecker {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a sentence: ");
        String sentence = scanner.nextLine();


        String regex = "^[A-Z].*\\.$";

        // Check if the sentence matches the pattern
        boolean isValid = Pattern.matches(regex, sentence);

        // Print result
        if (isValid) {
            System.out.println("Valid sentence!");
        } else {
            System.out.println(" Invalid sentence. It must start with a capital letter and end with a period.");
        }

        scanner.close();
    }
}