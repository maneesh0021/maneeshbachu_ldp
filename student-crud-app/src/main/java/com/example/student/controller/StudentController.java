package com.example.student.controller;

import com.example.student.model.Student;
import com.example.student.service.StudentService;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;
import java.util.List;

public class StudentController extends HttpServlet {
    private final StudentService service = new StudentService();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String action = req.getParameter("action");
        if (action == null) action = "";

        switch (action) {
            case "edit":
                Student student = service.getStudent(Integer.parseInt(req.getParameter("id")));
                req.setAttribute("student", student);
                req.getRequestDispatcher("/WEB-INF/views/form.jsp").forward(req, resp);
                break;
            case "add": // handle "Add New Student" action
                req.getRequestDispatcher("/WEB-INF/views/form.jsp").forward(req, resp);
                break;
            case "delete":
                service.deleteStudent(Integer.parseInt(req.getParameter("id")));
                resp.sendRedirect("students");
                break;
            default:
                List<Student> students = service.listStudents();
                req.setAttribute("students", students);
                req.getRequestDispatcher("/WEB-INF/views/list.jsp").forward(req, resp);
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        int id = req.getParameter("id").isEmpty() ? 0 : Integer.parseInt(req.getParameter("id"));
        String name = req.getParameter("name");
        String email = req.getParameter("email");

        Student student = new Student(id, name, email);
        if (id > 0) {
            service.updateStudent(student);
        } else {
            service.saveStudent(student);
        }
        resp.sendRedirect("students");
    }
}
