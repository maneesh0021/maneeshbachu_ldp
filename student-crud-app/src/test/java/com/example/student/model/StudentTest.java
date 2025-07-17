package com.example.student.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class StudentTest {

    @Test
    public void testStudentGetterSetter() {
        Student student = new Student();
        student.setId(101);
        student.setName("Test Name");
        student.setEmail("test@email.com");

        assertEquals(101, student.getId());
        assertEquals("Test Name", student.getName());
        assertEquals("test@email.com", student.getEmail());
    }

    @Test
    public void testStudentConstructor() {
        Student student = new Student(1, "Maneesh", "maneesh@mail.com");
        assertEquals(1, student.getId());
        assertEquals("Maneesh", student.getName());
        assertEquals("maneesh@mail.com", student.getEmail());
    }
}
