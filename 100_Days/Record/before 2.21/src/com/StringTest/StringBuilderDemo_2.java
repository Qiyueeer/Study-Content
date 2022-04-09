package com.StringTest;

/*
public String toString(): toString(); StringBuilder 转换为 String
public StringBuilder(String s): 通过构造把String 转换为StringBuilder
 */

public class StringBuilderDemo_2 {
    public static void main(String[] args){
       /*
        StringBuilder sb = new StringBuilder();
        sb.append("Hello");
        String s = sb.toString();
        System.out.println(s);
       */
        String s = "Hello";
        StringBuilder sb= new StringBuilder(s);
        System.out.println(sb);

    }
}
