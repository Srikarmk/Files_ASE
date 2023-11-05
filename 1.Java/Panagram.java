// C. Check if the input is pangram or not. (Pangram is a sentence that contains all the alphabet
//from a-z)
import java.util.Scanner;
public class Panagram {
    public static void checkPanagram(String str){
        str=str.toLowerCase();
        boolean letters=true;
        for(char c='a';c<='z';c++){
            if (!str.contains(String.valueOf(c))) {
                letters = false;
                break;
            }
        }
        if (letters){
            System.out.println("Yes it is a panagram");
        }
        else{
            System.out.println("No it is not a panagram");
        }
    }
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        String str=sc.nextLine();
        checkPanagram(str);
    }
}
