package com.example.student.service;

import com.example.student.dao.StudentDAO;
import com.example.student.model.Student;

import java.util.List;

public class StudentService {
    private final StudentDAO dao = new StudentDAO();

    public void saveStudent(Student student) { dao.saveStudent(student); }
    public void updateStudent(Student student) { dao.updateStudent(student); }
    public void deleteStudent(int id) { dao.deleteStudent(id); }
    public Student getStudent(int id) { return dao.getStudent(id); }
    public List<Student> listStudents() { return dao.getAllStudents(); }
}
