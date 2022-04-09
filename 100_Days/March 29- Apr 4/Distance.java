import java.util.Random;
import java.util.Scanner;

private static void distance(Point[] points){
    System.out.println("The situdation");
    Scanner sc1 = new Scanner(System.in);
    Scanner sc2 = new Scanner(System.in);
    for(int i = 0; i<points.length;i++)
        {
            double x = Math.abs(points[i].getX()- sc1.nextDouble())
            double y = Math.abs(points[i].getY()- sc2.nextDouble())
            double distance = Math.sqrt(x*x+y*y);
            int k = i+1;
            System.out.println("This distance of new point to point"+k+"is"+distance);
        }

        }

        public static void main(String[] args){
    Point[] points = new Point[50];
    Random random = new Random();
    for(int i = -; i<points.length; i++){
        points[i]=new point()
        points[i].setX(random.nextDouble())
        points[i]setY(random.nextDpuble())''
        }
    judgement(points);
    distance(points);
    clost(points);
        }
        }