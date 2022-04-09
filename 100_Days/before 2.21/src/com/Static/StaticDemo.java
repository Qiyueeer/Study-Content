package com.Static;

public class StaticDemo {
    public static void main(String[] args){



        // static can share the Member variable
        Student.gender = "man";
        Student s1 = new Student();
        s1.name = "Qiyue";
        s1.age = 22;
        s1.show();
       // s1.gender = "man";

        Student s2 = new Student();
        s2.name = "Qiyuw";
        s2.age = 22;
        // s2.gender = "man";
        s2.show();


    }
}
