package javaassignments.assignment12;
// Program to perform various analytics on student data using Java Streams and Collections.

import javaassignments.assignment12.model.Student;
import javaassignments.assignment12.repository.StudentRepository;
import javaassignments.assignment12.service.StudentService;

import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        StudentRepository repo = new StudentRepository();
        StudentService service = new StudentService(repo);

        // Add 17 students
        List<Student> students = List.of(
                new Student(111, "Jiya Brein", 17, "Female", "Computer Science", 2018, 70.8),
                new Student(122, "Paul Niksui", 18, "Male", "Mechanical", 2016, 50.2),
                new Student(133, "Martin Theron", 17, "Male", "Electronic", 2017, 90.3),
                new Student(144, "Murali Gowda", 18, "Male", "Electrical", 2018, 80),
                new Student(155, "Nima Roy", 19, "Female", "Textile", 2016, 70),
                new Student(166, "Iqbal Hussain", 18, "Male", "Security", 2016, 70),
                new Student(177, "Manu Sharma", 16, "Male", "Chemical", 2018, 70),
                new Student(188, "Wang Liu", 20, "Male", "Computer Science", 2015, 80),
                new Student(199, "Amelia Zoe", 18, "Female", "Computer Science", 2016, 85),
                new Student(200, "Jaden Dough", 18, "Male", "Security", 2015, 82),
                new Student(211, "Jasna Kaur", 20, "Female", "Electronic", 2019, 83),
                new Student(222, "Nitin Joshi", 19, "Male", "Textile", 2016, 60.4),
                new Student(233, "Jyothi Reddy", 16, "Female", "Computer Science", 2015, 45.6),
                new Student(244, "Nicolus Den", 16, "Male", "Electronic", 2017, 95.8),
                new Student(255, "Ali Baig", 17, "Male", "Electronic", 2018, 88.4),
                new Student(266, "Sanvi Pandey", 17, "Female", "Electric", 2019, 72.4),
                new Student(277, "Anuj Chettiar", 18, "Male", "Computer Science", 2017, 57.5)
        );

        students.forEach(service::addStudent);

        List<Student> allStudents = service.getAllStudents();

        // 1. Print all departments
        System.out.println("\n1. All Departments:");
        allStudents.stream()
                .map(Student::getEngDepartment)
                .distinct()
                .forEach(System.out::println);

        // 2. Students enrolled after 2018
        System.out.println("\n2. Students enrolled after 2018:");
        allStudents.stream()
                .filter(s -> s.getYearOfEnrollment() > 2018)
                .map(Student::getName)
                .forEach(System.out::println);

        // 3. Male students in Computer Science
        System.out.println("\n3. Male students in Computer Science:");
        allStudents.stream()
                .filter(s -> s.getGender().equalsIgnoreCase("Male"))
                .filter(s -> s.getEngDepartment().equalsIgnoreCase("Computer Science"))
                .forEach(System.out::println);

        // 4. Count male and female students
        System.out.println("\n4. Gender count:");
        Map<String, Long> genderCount = allStudents.stream()
                .collect(Collectors.groupingBy(Student::getGender, Collectors.counting()));
        genderCount.forEach((gender, count) -> System.out.println(gender + ": " + count));

        // 5. Average age by gender
        System.out.println("\n5. Average age by gender:");
        Map<String, Double> avgAge = allStudents.stream()
                .collect(Collectors.groupingBy(Student::getGender, Collectors.averagingInt(Student::getAge)));
        avgAge.forEach((gender, avg) -> System.out.println(gender + ": " + avg));

        // 6. Student with highest percentage
        System.out.println("\n6. Student with highest percentage:");
        allStudents.stream()
                .max(Comparator.comparingDouble(Student::getPerTillDate))
                .ifPresent(System.out::println);

        // 7. Student count per department
        System.out.println("\n7. Students in each department:");
        Map<String, Long> deptCount = allStudents.stream()
                .collect(Collectors.groupingBy(Student::getEngDepartment, Collectors.counting()));
        deptCount.forEach((dept, count) -> System.out.println(dept + ": " + count));

        // 8. Average percentage per department
        System.out.println("\n8. Average percentage per department:");
        Map<String, Double> avgPercent = allStudents.stream()
                .collect(Collectors.groupingBy(Student::getEngDepartment, Collectors.averagingDouble(Student::getPerTillDate)));
        avgPercent.forEach((dept, avg) -> System.out.println(dept + ": " + avg));

        // 9. Youngest male student in Electronic
        System.out.println("\n9. Youngest male student in Electronic:");
        allStudents.stream()
                .filter(s -> s.getGender().equalsIgnoreCase("Male"))
                .filter(s -> s.getEngDepartment().equalsIgnoreCase("Electronic"))
                .min(Comparator.comparingInt(Student::getAge))
                .ifPresent(System.out::println);

        // 10. Male and Female in Computer Science
        System.out.println("\n10. Gender count in Computer Science:");
        Map<String, Long> genderCS = allStudents.stream()
                .filter(s -> s.getEngDepartment().equalsIgnoreCase("Computer Science"))
                .collect(Collectors.groupingBy(Student::getGender, Collectors.counting()));
        genderCS.forEach((gender, count) -> System.out.println(gender + ": " + count));
    }
}