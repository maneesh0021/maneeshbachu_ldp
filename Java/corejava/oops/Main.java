package oops;

abstract class Person {
    private String name;  // Encapsulation
    private int age;      // Encapsulation

    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Getter methods (Encapsulation)
    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    // Abstract method (Abstraction)
    public abstract void introduce();
}

class Student extends Person {
    private String major;  // Encapsulation

    public Student(String name, int age, String major) {
        super(name, age); // Inheritance
        this.major = major;
    }

    // Overriding introduce() (Polymorphism)
    @Override
    public void introduce() {
        System.out.println("Hi, I'm student " + getName() + ", age " + getAge() + ". I major in " + major + ".");
    }
}

class Teacher extends Person {
    private String subject;  // Encapsulation

    public Teacher(String name, int age, String subject) {
        super(name, age); // Inheritance
        this.subject = subject;
    }

    // Overriding introduce() (Polymorphism)
    @Override
    public void introduce() {
        System.out.println("Hello, I'm teacher " + getName() + ", age " + getAge() + ". I teach " + subject + ".");
    }
}

public class Main {
    public static void main(String[] args) {
        Person student = new Student("Maneesh", 20, "Computer Science");
        Person teacher = new Teacher("Stark", 40, "Mathematics");

        student.introduce(); // Polymorphism
        teacher.introduce(); // Polymorphism
    }
}