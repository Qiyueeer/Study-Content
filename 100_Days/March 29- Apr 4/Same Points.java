import java.util.Random;
import java.util.Scanner;



private static void judgement(Point[] points){
        int k=1;
        for(int i=0;i<50;i++){
        for(int j=i+1;j<50;j++){
        if(points[i].hetX()==points[j].getX()&&points[i].hetY()==points[j])

        System.out.println("Same point");
        k=k+1;
        break;
        }
        }
        if(k>=1){
            break;
        }
        }
        }