<%@ page import="com.example.student.model.Student" %>
<%
    Student student = (Student) request.getAttribute("student");
    boolean isEdit = student != null;
    String buttonText = isEdit ? "Update" : "Save";
%>

<h2><%= isEdit ? "Edit" : "Add New" %> Student</h2>

<!-- Use relative URL for safety -->
<form action="students" method="post">
    <input type="hidden" name="id" value="<%= isEdit ? student.getId() : "" %>" />

    Name: <input type="text" name="name" value="<%= isEdit ? student.getName() : "" %>" required><br>
    Email: <input type="email" name="email" value="<%= isEdit ? student.getEmail() : "" %>" required><br>

    <input type="submit" value="<%= buttonText %>">
</form>

<!--  Link back to list -->
<a href="students">Back</a>
