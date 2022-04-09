package com.myExtends;


public class AnimalDemo {
    public static void main(String[] ages){

       Cat c1 = new Cat();
       c1.setName("Cattttt");
       c1.setAge(2);
       System.out.println(c1.getName()+","+c1.getAge());
       c1.catchMouse();

       Dog d1 = new Dog();
       d1.setName("Doggggg");
       d1.setAge(3);
       System.out.println(d1.getName()+","+d1.getAge());
       d1.lookGate();




    }
}
