package com.StringTest;

import java.util.Scanner;

public class StringBuilderTest02 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("输入一个字符串");
        String line = sc.nextLine();
        String s = reverse(line);
        System.out.println(s);

    }
    public static String reverse(String s) {
        /*StringBuilder sb = new StringBuilder();
         sb. reverse();
         String ss = sb.toString();
         return ss;
        */
       return new StringBuilder(s).reverse().toString();
    }
}
