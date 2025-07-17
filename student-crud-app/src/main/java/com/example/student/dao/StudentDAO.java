package com.example.student.dao;

import com.example.student.model.Student;
import com.example.student.util.HibernateUtil;
import org.hibernate.*;

import java.util.List;

public class StudentDAO {
    public void saveStudent(Student student) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            Transaction tx = session.beginTransaction();
            session.save(student);
            tx.commit();
        }
    }

    public void updateStudent(Student student) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            Transaction tx = session.beginTransaction();
            session.update(student);
            tx.commit();
        }
    }

    public void deleteStudent(int id) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            Transaction tx = session.beginTransaction();
            Student s = session.get(Student.class, id);
            session.delete(s);
            tx.commit();
        }
    }

    public Student getStudent(int id) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.get(Student.class, id);
        }
    }

    public List<Student> getAllStudents() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createQuery("from Student", Student.class).list();
        }
    }
}
