package javaassignments.assignment11;

import java.io.*;
import java.util.*;

public class CharacterCounter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the filename to read: ");
        String filename = scanner.nextLine();

        Map<Character, Integer> charCountMap = new HashMap<>();

        // Read the file and count characters
        try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
            int ch;
            while ((ch = reader.read()) != -1) {
                char character = (char) ch;
                charCountMap.put(character, charCountMap.getOrDefault(character, 0) + 1);
            }
        } catch (IOException e) {
            System.out.println("Error reading the file: " + e.getMessage());
            scanner.close();
            return;
        }

        try (PrintWriter writer = new PrintWriter(new FileWriter("output.txt"))) {
            for (Map.Entry<Character, Integer> entry : charCountMap.entrySet()) {
                char character = entry.getKey();
                int count = entry.getValue();
                String displayChar;
                if (character == '\n') {
                    displayChar = "\\n";
                } else if (character == '\r') {
                    displayChar = "\\r";
                } else if (character == '\t') {
                    displayChar = "\\t";
                } else if (character == ' ') {
                    displayChar = "' ' (space)";
                } else {
                    displayChar = Character.toString(character);
                }
                writer.println(displayChar + " : " + count);
            }
            System.out.println("Character counts saved in output.txt");
        } catch (IOException e) {
            System.out.println("Error writing the output file: " + e.getMessage());
        }

        scanner.close();
    }
}