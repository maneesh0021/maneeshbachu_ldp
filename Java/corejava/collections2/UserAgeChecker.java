package corejava.collections2;
//using iterator,wrapper class,exceptions


import java.util.ArrayList;
import java.util.Iterator;

public class UserAgeChecker {
    public static void main(String[] args) {
        // Step 1: Create a list of ages using Wrapper class (Integer)
        ArrayList<Integer> ageList = new ArrayList<>();
        ageList.add(25);  // auto-boxing: int to Integer
        ageList.add(16);
        ageList.add(30);
        ageList.add(15);

        // Step 2: Use Iterator to loop through each age
        Iterator<Integer> iterator = ageList.iterator();

        while (iterator.hasNext()) {
            Integer age = iterator.next();  // unboxing: Integer to int

            try {
                // Step 3: Check age using exception
                checkAge(age);
                System.out.println("Age " + age + " is allowed.");
            } catch (Exception e) {
                System.out.println("Age " + age + " is NOT allowed. Reason: " + e.getMessage());
                // Optionally remove underage user from list
                iterator.remove();
            }
        }

        // Step 4: Print remaining valid ages
        System.out.println("Final allowed age list: " + ageList);
    }

    // Method that throws an exception if age is less than 18
    public static void checkAge(int age) throws Exception {
        if (age < 18) {
            throw new Exception("Age must be 18 or above.");
        }
    }
}