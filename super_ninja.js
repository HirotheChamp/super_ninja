


class Ninja {
    constructor(name, health=5){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
       
        }
        
      
    sayName(){
        console.log (`My name is ${this.name}`);
        return this;
    }

showStats(){
    console.log (`Name: ${this.name}`);
    console.log (`Health: ${this.health}`);
    console.log (`Speed: ${this.speed}`);
    console.log (`Strength: ${this.strength}`);
    return this;
}
drinkSake (){
    console.log (`${this.name} drank sake!`);
    this.health +=10;
    return this;
}

}

class Sensei extends Ninja {
    constructor (name){
        super(name)
        this.wisdom = 10

    }
    speakWisdom (){
        super.drinkSake()
        console.log (`${this.name} thinks that man who sits on a tack gets the point!`);
        
        return this;
    }

}


    const sensei = new Sensei("Uni");
    sensei.speakWisdom()
    
   
