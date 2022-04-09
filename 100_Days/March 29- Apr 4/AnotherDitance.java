Private static void distance(Point[] points){
         System.out.println("Please type the Coordinates")
        Scanner sc1 = new Scanner(System.in);
         double one = sc1.nextDouble();
         Scanner sc2= new Scanner(System.in);
         double two = sc2.nextDouble();
         for(int i =0; i<points.length;i++)
        {
            double x = Math.abs(points[i] getX() - one)
            double y = Math.abs(points[i] getY() - one)
        double distance = Math.sqrt(x*x+y*y);
            int k = i+1;
            System.out.println("The distance of newpoint to point"+k+"is"+distance);
        }
        }