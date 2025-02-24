import java.util.ArrayList;

public class Guddu {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<Integer>();
        ArrayList<String> list1 = new ArrayList<String>();
        ArrayList<Boolean> list2 = new ArrayList<Boolean>();

        //add list 
        list.add(1);
        list.add(14);
        list.add(13);
        System.out.println(list);


        // get element 
        int element  = list.get(0);
        int element1  = list.get(1);
        int element2  = list.get(2);


        // add element

        list.add(1,1122);
        System.out.println(list);

    }  
}