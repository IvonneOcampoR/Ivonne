public class Person{
    public String name;
    public int age;
    public int points;

    //constructor

    public Person(String name, int age){

        this.name = name;
        this.age = age;
        this.points = 100;
    }

    //methods

    public void setName(String name){
        this.name = name;
    }

    public String getName(){
        return this.name;
    }

    public void sayHello(String friend){
        System.out.println("Hello " + friend);
    }

    public void printP(){
        System.out.println(this.name);
        System.out.println(this.age);
        System.out.println(this.points);
    }

    public int getAge(){
        return this.age;
    }

    public void setAge(int a){
        age = a;
    }

}