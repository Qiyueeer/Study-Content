package com.StringTest;

// public StringBuilder append() 添加数据 任意类型
// public StringBuilder reverse() 反转，是真的反转

public class StringBuilderDemo {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        //链式编程
        sb.append("hello"+",").append("world"+",").append("Java"+",");
        System.out.println(sb);
        sb.reverse();
        System.out.println(sb);



    }

}
