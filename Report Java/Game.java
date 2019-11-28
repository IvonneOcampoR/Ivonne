public class Game{

    public static void main(String args[])
    {
        Character toad = new Character("Toad", 100, 50);
        Character elsa = new Character("Elsa", 100, 20);

       // System.out.println(toad.getName() + "\n " + toad.getAttackPoints() + "\n" +toad.getLifePoints());
 
        //System.out.println(elsa.getName() + "\n " + elsa.getAttackPoints() + "\n" +elsa.getLifePoints()); 

          toad.attack(elsa);
          toad.attack(elsa);
          toad.attack(elsa);
          toad.attack(elsa);
          toad.attack(elsa);
          elsa.attack(toad);
          toad.attack(elsa);
         
    }
       
}