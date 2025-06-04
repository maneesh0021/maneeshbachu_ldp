package javaassignments.assignment4;
// Program to calculate and print the KYC renewal window (±30 days around each signup anniversary) for multiple test cases.
import java.text.SimpleDateFormat;
import java.util.*;

public class KYCDateRange {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");
        sdf.setLenient(false);

        int n;
        try {
            n = Integer.parseInt(sc.nextLine().trim());
        } catch (Exception e) {
            System.out.println("Invalid number of test cases.");
            sc.close();
            return;
        }

        for (int i = 0; i < n; i++) {
            try {
                String[] input = sc.nextLine().trim().split(" ");
                if (input.length != 2) {
                    System.out.println("Invalid input format.");
                    continue;
                }

                Date signupDate = sdf.parse(input[0]);
                Date currentDate = sdf.parse(input[1]);

                if (currentDate.before(signupDate)) {
                    System.out.println("No range");
                    continue;
                }

                Calendar signupCal = Calendar.getInstance();
                signupCal.setTime(signupDate);

                Calendar currentCal = Calendar.getInstance();
                currentCal.setTime(currentDate);

                Calendar anniversary = Calendar.getInstance();
                anniversary.set(Calendar.YEAR, currentCal.get(Calendar.YEAR));
                anniversary.set(Calendar.MONTH, signupCal.get(Calendar.MONTH));
                anniversary.set(Calendar.DAY_OF_MONTH, signupCal.get(Calendar.DAY_OF_MONTH));

                if (anniversary.after(currentCal)) {
                    anniversary.add(Calendar.YEAR, -1);
                }

                Calendar startRange = (Calendar) anniversary.clone();
                startRange.add(Calendar.DAY_OF_MONTH, -30);

                Calendar endRange = (Calendar) anniversary.clone();
                endRange.add(Calendar.DAY_OF_MONTH, 30);

                if (currentDate.before(startRange.getTime())) {
                    System.out.println("No range");
                } else {
                    Date startDate = startRange.getTime();
                    Date endDate = currentDate.before(endRange.getTime()) ? currentDate : endRange.getTime();
                    System.out.println(sdf.format(startDate) + " " + sdf.format(endDate));
                }

            } catch (Exception e) {
                System.out.println("Invalid date format.");
            }
        }

        sc.close();
    }
}
