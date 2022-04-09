package com.StringTest;


import java.util.Scanner;

public class StringTest01 {
    public static void main(String[] args) {
        String username = "2108335219";
        String passpord = "ZqY/5780669";
        for (int i = 0; i < 3; i++) {
            Scanner sc = new Scanner(System.in);

            System.out.println("请输入用户名");
            String name = sc.nextLine();


            System.out.println("请输入密码");
            String pwd = sc.nextLine();

            if (name.equals(username) && pwd.equals(passpord)) {
                System.out.println("登陆成功");
                break;
            } else {
                if (2 - i == 0) {
                    System.out.println("输入次数过多，账号被锁定，请修改密码");
                } else {
                    System.out.println("登陆失败,你还有" + (2 - i) + "次机会");
                }


            }
        }
    }
}
