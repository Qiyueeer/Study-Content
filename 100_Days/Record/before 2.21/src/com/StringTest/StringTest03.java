package com.StringTest;
import java.util.Scanner;
// char At() 返回指定索引处字符
public class StringTest03 {
    public static void main(String[] args){
         // 统计三种字符串的数量
        //大写字母，小写字母和数字
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入你的字符");
        String line =sc. nextLine();
        int bigCount = 0;
        int smallCount =0;
        int numberCount = 0;
        for(int i =0 ; i< line.length();i++){
            char ch = line.charAt(i);
            if(ch>= 'A' && ch<='Z'){
                bigCount++;
            }else if(ch>='a'&& ch<='z') {
                smallCount++;
            }else if(ch>='0' && ch<='9'){
                numberCount++;
            }

        }
        System.out.println("大写字母"+ bigCount+"个");
        System.out.println("小写字母"+ smallCount+"个");
        System.out.println("数字字母"+ numberCount+"个");
    }
}
