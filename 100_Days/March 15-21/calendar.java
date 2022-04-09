

public class CalenderDemo{
public static void main(String[] args){

Calendar c = Calenar.getInstance()



c.add(Calendar.YEAR, amount: -3);
c.add(Calendar.MONTH,amount: -5);
int year = c. het(Calendar.YEAR);
int month = c.get(Calendar.MONTH) +1;
int date = c.get(Calendar.DATE);
System.out.println(year +"year" +month="month"+date+"day");