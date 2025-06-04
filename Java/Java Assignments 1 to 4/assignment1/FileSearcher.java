package javaassignments.assignment1;
//This program allows the user to search for files in their home directory using a regular expression.
//It scans all subdirectories recursively. It continues to take input until the user types "exit".
import java.io.File;
import java.util.Scanner;
import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class FileSearcher {

    public static void main(String[] args) {
        String homeDirectory = System.getProperty("user.home");
        Scanner scanner = new Scanner(System.in);

        System.out.println("Welcome to FileSearcher!");
        System.out.println("Searching in your home directory: " + homeDirectory);
        System.out.println("Type a regular expression to search for file names, or type 'exit' to quit.");

        while (true) {
            System.out.print("\nEnter regex pattern: ");
            String input = scanner.nextLine();

            if (input.equalsIgnoreCase("exit")) {
                System.out.println("Exiting FileSearcher. Goodbye!");
                break;
            }

            try {
                Pattern pattern = Pattern.compile(input);
                System.out.println("Searching for files matching pattern: " + input + "\n");
                searchFiles(new File(homeDirectory), pattern);
            } catch (Exception e) {
                System.out.println("Invalid regular expression. Please try again.");
            }
        }

        scanner.close();
    }

    public static void searchFiles(File dir, Pattern pattern) {
        File[] files = dir.listFiles();

        if (files == null) {
            return;
        }

        for (File file : files) {
            if (file.isDirectory()) {
                searchFiles(file, pattern);
            } else {
                Matcher matcher = pattern.matcher(file.getName());
                if (matcher.find()) {
                    System.out.println(file.getAbsolutePath());
                }
            }
        }
    }
}
