package com.Array;
import java.util.ArrayList;

public class ArraylistTest01 {
    public static void main(String[] args){
        ArrayList<Student> array = new ArrayList<Student>();

        Student s1 = new Student("qiyue Zhang",20);
        Student s2 = new Student("fl",27);
        Student s3 = new Student("fm",25);

        array.add(s1);
        array.add(s2);
        array.add(s3);

        for(int i = 0; i< array.size();i++){
            Student s = array.get(i);
            System.out.println(s.getName() +","+s.getAge());
        }

/*
        System.out.println(array.get(0));
        System.out.println(array.get(1));
        System.out.println(array.get(2));
        for(int i = 0; i<3; i++){
            System.out.println(array.get(i));
            System.out.println(array.size());

 */

           /* for(int i =0; i<array.size();i++){
                Student s = array.get(i);{
                System.out.println(s);
}
            }
        */
    }
}

