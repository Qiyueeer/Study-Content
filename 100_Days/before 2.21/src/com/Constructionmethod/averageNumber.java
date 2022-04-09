package com.Constructionmethod;
import java.util.Scanner;
import java.util.Random;

public class averageNumber {
    public static void main(String[] args) {
        int[] Sco = new int[6];
        Scanner sc = new Scanner(System.in);
        for (int i = 0; i < Sco.length; i++) {
            System.out.println("Please type the judge"+(i + 1)+"'s score");
            Sco[i] = sc.nextInt();

        }
        int max = getMax(Sco);
        int min = getMin(Sco);
        int sum = getSum(Sco);
        int ave = (sum - max - min) / (Sco.length - 2);
        System.out.println(ave);



    }

    public static int getSum(int[] Sco) {
        int sum = 0;
        for (int i = 0; i < Sco.length; i++) {
            sum += Sco[i];
        }
        return sum;
    }

    public static int getMin(int[] Sco) {
        int min = Sco[0];
        for (int i = 0; i < Sco.length; i++) {
            if (Sco[i] < min) {
                min = Sco[i];
            }

        }
        return min;
    }

    public static int getMax(int[] Sco) {
        int max = Sco[0];
        for (int i = 0; i < Sco.length; i++) {
            if (Sco[i] > max) {
                max = Sco[i];
            }


        }
        return max;
    }
}
