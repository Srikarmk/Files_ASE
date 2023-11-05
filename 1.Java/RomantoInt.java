// B. Enter a Roman Number as input and convert it to an integer. (ex IX = 9)
import java.util.*;
class RomantoInt {
    public int romanToInt(String s) {
        int t=0;
        if(s.length()<2){
            char k=s.charAt(0);
            t=priority(k);
            return t;
        }else{
            for(int i=0;i<s.length()-1;i++){
                char k=s.charAt(i);
                char j=s.charAt(i+1);
                if(priority(k)>=priority(j)){
                    t=t+priority(k);
                }else {
                    t=t+priority(j)-priority(k);
                    i++;
                }
            }}
        if(s.length()<2){
            return t;
        }else if(priority(s.charAt(s.length()-1))<=priority(s.charAt(s.length()-2))){
            return t+priority(s.charAt(s.length()-1));
        }else{
            return t;
        }
    }
    int priority(char k){
        if(k=='I'){
            return 1;
        }else if(k=='V'){
            return 5;
        }else if(k=='X'){
            return 10;
        }else if(k=='L'){
            return 50;
        }else if(k=='C'){
            return 100;
        }else if(k=='D'){
            return 500;
        }else if(k=='M'){
            return 1000;
        }
        return 0;
    }
    public static void main(String str[])
    {
        Scanner sc = new Scanner(System.in);
        RomantoInt obj = new RomantoInt();
        String str1= sc.nextLine();
        str1=str1.toUpperCase();
        int n = obj.romanToInt(str1);
        System.out.println(n);

    }
}