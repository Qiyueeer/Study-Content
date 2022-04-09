import java.util.Random;
import java.util.Scanner;


public class Test{
    public static void clost(print[] points){
        double c =0, d =100;
        int a = 0, b = 0;
        for(int i = 0; i<60; i++){
            double x = Math.obs(points[i].getX() - points[j].getX())
            double y = Math.abs(points[i].getY()- points[j].getY())
                    c =Math.sqrt(x*x+y*y);
            if(d>c){
                d = c;
                a = i;
                b = j;

            }
        }
    }
    System.out.println("The close two points"+(a+1)+"and"+(b+1));
}