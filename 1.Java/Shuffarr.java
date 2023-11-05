// A. Create an array with the values (1, 2, 3, 4, 5, 6, 7) and shuffle it.
import java.util.Random;
import java.util.Arrays;
    public class Shuffarr {
    public static void main(String[] args){
        int[] arr={1,2,3,4,5,6};
        Random rand=new Random();
        for(int i=0;i<arr.length;i++){
            int randidx=rand.nextInt(arr.length);
            int t=arr[randidx];
            arr[randidx]=arr[i];
            arr[i]=t;
        }
        System.out.println(Arrays.toString(arr));

    }
}
