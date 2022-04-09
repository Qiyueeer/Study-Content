/*
member variableCompile to the right and execute to the right
member method：compile to the right and execute to the left

because rewrite.
成员变量：编译看父类，执行看父类
成员方法：编译看父类，执行看子类
因为重写了

所有的编译父类都必须有，否则会报错
方法执行 子类的重写方法.

 */




package com.polymorphism;

public class AnimalDemo {
    public static void main(String[] ages){
        Animal a = new cat();

        System.out.println(a.age);
        System.out.println(a.weight);
        a.eat();
        a.play();




    }
}
