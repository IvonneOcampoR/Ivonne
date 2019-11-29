public class Example{

    public static void main(String args[]){

        Person student1 = new Person("Josh",30);
        Person student2 = new Person("Sandie",20);
        Person student3 = new Person("Leila",20);
        Animal animal1 = new Animal("Nala","cat");
        Animal animal2 = new Animal("Peluchin","dog");
        Animal animal3 = new Animal("Figaro","cricket");

        animal1.attacks(student1.getName());
        animal2.attacks(student2.getName());
        animal3.attacks(student3.getName());


    }
}