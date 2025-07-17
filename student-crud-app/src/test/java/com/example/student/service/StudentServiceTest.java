package com.example.student.service;

import com.example.student.model.Student;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class StudentServiceTest {

    private final StudentService service = new StudentService();

    @Test
    public void testSaveAndRetrieveStudent() {
        Student student = new Student(0, "Test User", "test@example.com");
        service.saveStudent(student);

        List<Student> students = service.listStudents();
        boolean found = students.stream().anyMatch(s -> "Test User".equals(s.getName()));
        assertTrue(found);
    }

    @Test
    public void testGetStudentById() {
        List<Student> students = service.listStudents();
        if (!students.isEmpty()) {
            int id = students.get(0).getId();
            Student student = service.getStudent(id);
            assertNotNull(student);
        } else {
            fail("No students in DB to test.");
        }
    }
}
