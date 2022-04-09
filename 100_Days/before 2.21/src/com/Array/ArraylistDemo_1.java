package com.Array;
import java.util.ArrayList;

public class ArraylistDemo_1 {
    public static void main(String[] args){
        ArrayList<String> array = new ArrayList<String>();
        array.add("Hello");
        array.add("World");
        array.add("Java");


        // 此功能为在索引位置前加入一个元素，索引位置为1 即为world
        //在world前加入javase
        array.add(1,"javase");


        // 删除元素 index 索引位置
        //array.remove("Hello");
        //array.remove(0);


        // set为修改元素
        //array.set(0,"javaSE");

        // get 拿到索引位置的元素， 0 位置是hello 所以拿出hello


        //array.size 为输出元素个数
        System.out.println(array.size());
        System.out.println(array.get(0));
        System.out.println(array);

    }
}
