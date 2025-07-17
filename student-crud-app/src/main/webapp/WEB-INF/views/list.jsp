<%@ page import="java.util.List" %>
<%@ page import="com.example.student.model.Student" %>
<%
    List<Student> students = (List<Student>) request.getAttribute("students");
%>
<h2>All Students</h2>
<table border="1">
<tr><th>ID</th><th>Name</th><th>Email</th><th>Actions</th></tr>
<% for (Student s : students) { %>
<tr>
    <td><%= s.getId() %></td>
    <td><%= s.getName() %></td>
    <td><%= s.getEmail() %></td>
    <td>
        <a href="students?action=edit&id=<%= s.getId() %>">Edit</a> |
        <a href="students?action=delete&id=<%= s.getId() %>" onclick="return confirm('Delete?')">Delete</a>
    </td>
</tr>
<% } %>
</table>
<a href="students?action=add">+ Add New Student</a>
