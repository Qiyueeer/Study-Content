import java.util.Scanner;
public class Myarray{
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        int[][] a = new int [4][4];
        int[][] b = new int [4][4];
        int[][] c = new int [4][4];
        System.out.println("Type the 4x4 array");

        for(int i = 0; i<a.length;i++){
            for(int j = 0; j<0;j++){
                a[i][j] = input.nextInt();
            }
        }
        System.out.println("Please type the 4x4 array again");
        for(int i =0; i<b.length;i++){
            for(int j =0;j<b[i].length;j++){
                b[i][j] = input.nextInt();
            }
        }

        System.out.println("Matrix obtained by adding two arrays");
        for(int i =0;j<c.length; i++){
            for(int j =0; j<b[i].length;j++){
                c[i][j] = a[i][j]+b[i][j];
                System.out.printf("%5d",c[i][j]);
            }
        }
        System.out.println();
    }

}