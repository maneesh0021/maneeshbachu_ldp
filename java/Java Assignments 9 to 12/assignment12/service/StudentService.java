package javaassignments.assignment12.service;

import javaassignments.assignment12.model.Student;
import javaassignments.assignment12.repository.StudentRepository;

import java.util.List;

public class StudentService {

    private final StudentRepository repository;

    public StudentService(StudentRepository repository) {
        this.repository = repository;
    }

    public void addStudent(Student student) {
        repository.save(student);
    }

    public List<Student> getAllStudents() {
        return repository.findAll();
    }
}