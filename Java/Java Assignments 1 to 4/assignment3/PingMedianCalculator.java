package javaassignments.assignment3;
//Java function that will ping any given host (like google.com or an IP address) using the system’s ping utility
//Then compute the median of the time taken for those pings.
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class PingMedianCalculator {

    public static Double getMedianPingTime(String host, int pingCount) throws Exception {
        List<Double> pingTimes = new ArrayList<>();

        String os = System.getProperty("os.name").toLowerCase();
        List<String> command = new ArrayList<>();

        if (os.contains("win")) {
            command.add("ping");
            command.add("-n");
            command.add(String.valueOf(pingCount));
            command.add(host);
        } else {

            command.add("ping");
            command.add("-c");
            command.add(String.valueOf(pingCount));
            command.add(host);
        }

        ProcessBuilder pb = new ProcessBuilder(command);
        Process process = pb.start();

        try (BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()))) {
            String line;

            while ((line = reader.readLine()) != null) {
                Double time = parsePingTime(line);
                if (time != null) {
                    pingTimes.add(time);
                }
            }
        }

        process.waitFor();

        if (pingTimes.isEmpty()) {
            return null;
        }

        Collections.sort(pingTimes);

        int middle = pingTimes.size() / 2;

        if (pingTimes.size() % 2 == 0) {
            return (pingTimes.get(middle - 1) + pingTimes.get(middle)) / 2.0;
        } else {

            return pingTimes.get(middle);
        }
    }

    private static Double parsePingTime(String pingOutputLine) {
        String lowerLine = pingOutputLine.toLowerCase();
        int timeIndex = lowerLine.indexOf("time=");
        if (timeIndex == -1) {
            return null;
        }

        int msIndex = lowerLine.indexOf("ms", timeIndex);
        if (msIndex == -1) {
            return null;
        }

        String timeStr = pingOutputLine.substring(timeIndex + 5, msIndex).trim();

        if (timeStr.startsWith("<")) {
            timeStr = "0.5";
        }

        try {
            return Double.parseDouble(timeStr);
        } catch (NumberFormatException e) {
            return null;
        }
    }


    public static void main(String[] args) {
        try {
            String host = "google.com";
            int count = 5;

            Double medianPing = getMedianPingTime(host, count);

            if (medianPing != null) {
                System.out.printf("Median ping time to %s over %d pings is %.2f ms%n", host, count, medianPing);
            } else {
                System.out.println("No ping responses received.");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

