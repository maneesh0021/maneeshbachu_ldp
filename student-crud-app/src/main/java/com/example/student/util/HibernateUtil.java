package com.example.student.util;

import io.github.cdimascio.dotenv.Dotenv;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class HibernateUtil {
    private static final SessionFactory sessionFactory;

    static {
        Dotenv dotenv = Dotenv.load();

        sessionFactory = new Configuration()
                .setProperty("hibernate.connection.driver_class", "com.mysql.cj.jdbc.Driver")
                .setProperty("hibernate.connection.url", dotenv.get("DB_URL"))
                .setProperty("hibernate.connection.username", dotenv.get("DB_USER"))
                .setProperty("hibernate.connection.password", dotenv.get("DB_PASSWORD"))
                .setProperty("hibernate.dialect", "org.hibernate.dialect.MySQL8Dialect")
                .setProperty("hibernate.hbm2ddl.auto", "update")
                .addAnnotatedClass(com.example.student.model.Student.class)
                .buildSessionFactory();
    }

    public static SessionFactory getSessionFactory() {
        return sessionFactory;
    }
}
