public class Character{

    private String name;
    private int strength;
    private int lifes;
    private int attackPoints;

    //constructor
    public Character(String name, int strength, int attackPoints){
       this.name=name;
       this.strength=strength;
       this.attackPoints=attackPoints;
       this.lifes=3;
    }

    //getters
     public String getName(){
         return this.name;
     }

     public int getstrength(){
         return this.strength;
     }

     public int getAttackPoints(){
        return this.attackPoints;
     }
    //methods
    
    public void display(){
        System.out.println("------------------");
        System.out.println("Name:" + this.name);
        System.out.println("$" + this.lifes);
        System.out.println("strength" + this.strength);
        System.out.println("Attack Points" + this.attackPoints);
    }
    
    public void attack(Character enemy){
        System.out.println(this.name + " is attacking..." + enemy.name);

        int newLP = enemy.strength-this.attackPoints;
       
        enemy.strength=newLP;
        enemy.display();

        if(enemy.strength <= 0){
          enemy.lifes= enemy.lifes-1;
          enemy.strength=100;
          enemy.display();
        
            
        if(enemy.lifes == 0)
          System.out.println(enemy.name + " Good Luck Next Time" + " You are the winner" + this.name + ":D" );
        }
          

   }

}