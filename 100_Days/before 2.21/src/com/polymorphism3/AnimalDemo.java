package com.polymorphism03;

public class AnimalDemo {
    public static void main(String[] args) {

        Animal a = new Cat();
        a.eat();
        /*
        Cat c = new Cat();
        c.eat();
        c.play();
    */

        Cat c = (Cat)a;
        c.eat();
        c.play();
    }

}
