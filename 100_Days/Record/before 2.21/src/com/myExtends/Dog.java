package com.myExtends;

import java.util.Scanner;
import java.util.Random;



public class Dog extends Animal {
    public Dog (){

    }

    public Dog(String name, int age){
        super(name,age);
    }

    public void lookGate(){
        System.out.println("Dog can look Gate");
    }
}
