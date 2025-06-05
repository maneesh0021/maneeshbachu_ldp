package javaassignments.assignment12.model;

public class Student {
    private int id = 0;
    private String name = "";
    private int age = 0;
    private String gender = "";
    private String engDepartment = "";
    private int yearOfEnrollment = 0;
    private double perTillDate = 0.0;

    public Student() {
        // default constructor
    }

    public Student(int id, String name, int age, String gender, String engDepartment, int yearOfEnrollment, double perTillDate) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.engDepartment = engDepartment;
        this.yearOfEnrollment = yearOfEnrollment;
        this.perTillDate = perTillDate;
    }

    public int getId() { return id; }

    public String getName() { return name; }

    public int getAge() { return age; }

    public String getGender() { return gender; }

    public String getEngDepartment() { return engDepartment; }

    public int getYearOfEnrollment() { return yearOfEnrollment; }

    public double getPerTillDate() { return perTillDate; }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", age=" + age +
                ", gender='" + gender + '\'' +
                ", engDepartment='" + engDepartment + '\'' +
                ", yearOfEnrollment=" + yearOfEnrollment +
                ", perTillDate=" + perTillDate +
                '}';
    }
}
