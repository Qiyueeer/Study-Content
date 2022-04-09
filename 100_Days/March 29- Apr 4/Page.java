import java.util.Objects;
import java.util.Random;
import java.util.Scanner;

public class Point{
    private double x=0;
    private double y=0;

     public Point(){
         x=0;
         y=0
     };


     public Point(double x, double y) {
         this.x = x;
         this.y = y;
     }
     public double getX() {
         return x;
     }
     public void setX(double x) {
         this.x = x;
     }

     public double getY() {
         return y;
     }


     public void setY(double y) {
         this.y = y;
     }



     }
}