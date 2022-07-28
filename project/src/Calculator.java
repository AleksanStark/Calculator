import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import  java.util.Scanner;
import java.sql.SQLOutput;

public class Calculator {

    int plus(int a, int b){
        return  a + b;
    }

    int minus(int a , int b){
        return a - b;
    }

    int multiplication(int a , int b){
        return a * b;
    }

    int division(int a , int b){
        return a / b;
    }


    public void calculateNumbers() throws IOException, DoubleException {
        System.out.print("Введите числа и знак операции в одну строку: ");
        Scanner reader = new Scanner(System.in);
        Calculator calculator = new Calculator();
        String a, b, c;
        String[] data = reader.nextLine().replaceAll("\\s+", "").split("");
        a = data[0];
        b = data[1];
        c = data[2];

    try {


        Integer q = Integer.valueOf(a);
        Integer w = Integer.valueOf(c);

        if (q instanceof Integer) {

            switch (b) {

                case "+":
                    System.out.println(calculator.plus(q, w));
                    break;

                case "-":
                    System.out.println(calculator.minus(q, w));
                    break;

                case "*":
                    System.out.println(calculator.multiplication(q, w));
                    break;

                case "/":
                    System.out.println(calculator.division(q, w));
                    break;


            }


        }else{
            System.out.println("Числа должны быть целочислиные");
        }




    }catch (NumberFormatException e){
        System.out.println("Введите числа от 1 до 9");

    }
    }




//            case "*":
//                System.out.println(calculator.multiply(q,w));
////
//            case "/":
//                System.out.println(calculator.div(q,w));

}









