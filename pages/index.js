import { useState } from "react";
function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  const [likes, setLikes] = useState(0);

  //////////////////////Classes Asignment-META

  //   class Animal {
  //     constructor(color = 'yellow', energy = 100) {
  //         this.color = color;
  //         this.energy = energy;
  //     }
  //     isActive() {
  //         if(this.energy > 0) {
  //             this.energy -= 20;
  //             console.log('Energy is decreasing, currently at:', this.energy)
  //         } else if(this.energy == 0){
  //             this.sleep();
  //         }
  //     }
  //     sleep() {
  //         this.energy += 20;
  //         console.log('Energy is increasing, currently at:', this.energy)
  //     }
  //     getColor() {
  //         console.log(this.color)
  //     }
  // }

  // class Cat extends Animal {
  //     constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
  //         super(color, energy);
  //         this.sound = sound;
  //         this.canClimbTrees = canClimbTrees;
  //         this.canJumpHigh = canJumpHigh;
  //     }
  //     makeSound() {
  //         console.log(this.sound);
  //     }
  // }

  // class Bird extends Animal {
  //     constructor(sound = 'chirp', canFly = true, color, energy) {
  //         super(color, energy);
  //         this.sound = sound;
  //         this.canFly = canFly;
  //     }
  //     makeSound() {
  //         console.log(this.sound);
  //     }
  // }

  // class HouseCat extends Cat {
  //     constructor(houseCatSound = "meow", sound,canJumpHigh,canClimbTrees, color,energy) {
  //         super(sound,canJumpHigh,canClimbTrees, color,energy);
  //         this.houseCatSound = houseCatSound;
  //     }
  //     makeSound(option) {
  //         if (option) {
  //             super.makeSound();
  //         }
  //         console.log(this.houseCatSound);
  //     }
  // }

  // class Tiger extends Cat {
  //     constructor(tigerSound = "Roar!", sound,canJumpHigh,canClimbTrees, color,energy) {
  //         super(sound,canJumpHigh,canClimbTrees, color,energy);
  //         this.tigerSound = tigerSound;
  //     }
  //     makeSound(option) {
  //         if (option) {
  //             super.makeSound();
  //         }
  //         console.log(this.tigerSound);
  //     }
  // }

  // class Parrot extends Bird {
  //     constructor(canTalk = false, sound,canFly, color,energy) {
  //         super(sound,canFly, color,energy);
  //         this.canTalk = canTalk;
  //     }
  //     makeSound(option) {
  //         if (option) {
  //             super.makeSound();
  //         }
  //         if (this.canTalk) {
  //             console.log("I'm a talking parrot!");
  //         }
  //     }
  // }

  // var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk
  // var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk

  // fiji.makeSound(); // undefined
  // fiji.makeSound(true); // chirp

  // polly.makeSound(); // I'm a talking parrot!
  // polly.makeSound(true); // chirp, I'm a talking parrot!

  // polly.color; // yellow
  // polly.energy; // 100

  // polly.isActive(); // Energy is decreasing, currently at: 80

  // var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
  // penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

  // penguin.sound; // 'shriek'
  // penguin.canFly; // false
  // penguin.color; // 'black and white'
  // penguin.energy; // 200
  // penguin.isActive(); // Energy is decreasing, currently at: 180

  // var leo = new HouseCat();

  // // leo, no purring please:
  // leo.makeSound(false); // meow
  // // leo, both purr and meow now:
  // leo.makeSound(true); // purr, meow

  // var cuddles = new Tiger();
  // cuddles.makeSound(false); // Roar!
  // cuddles.makeSound(true); // purr, Roar!
  //////////////////////////////////////////////////////////////////////////
  // Task 1
//   var dairy = [
//     "cheese",
//     "sour cream",
//     "milk",
//     "yogurt",
//     "ice cream",
//     "milkshake",
//   ];
//   function logDairy() {
//     console.log(
//       `cheese
// sour cream
// milk
// yogurt
// ice cream
// milkshake`
//     );
//   }
//   // Task 2
//   const animal = {
//     canJump: true,
//   };

//   const bird = Object.create(animal);

//   bird.canFly = true;
//   bird.hasFeathers = true;

//   function birdCan() {
//     for (const [key, value] of Object.entries(bird)) {
//       console.log(`${key}: ${value}`);
//     }
//   }
//   birdCan();
//   // Task 3

//   function animalCan() {
//     for (const property in bird) {
//       console.log(`${property}: ${bird[property]}`);
//     }
//   }
//   animalCan();

  // Task 1

  // var dairy = [
  //   "cheese",
  //   "sour cream",
  //   "milk",
  //   "yogurt",
  //   "ice cream",
  //   "milkshake",
  // ];

  // function logDairy() {
  //   for (product of dairy) {
  //     console.log(product);
  //   }
  // }

  // logDairy();

  // // Task 2

  // const animal = {
  //   canJump: true,
  // };

  // const bird = Object.create(animal);

  // bird.canFly = true;

  // bird.hasFeathers = true;

  // function birdCan() {
  //   for (key of Object.keys(bird)) {
  //     console.log(key + ": " + bird[key]);
  //   }
  // }

  // birdCan();

  // // Task 3

  // function animalCan() {
  //   for (prop in bird) {
  //     console.log(prop + ": " + bird[prop]);
  //   }
  // }

  // animalCan();

  //////////////////////////////////////////////
  // class Animal {}

  // class Cat extends Animal {
  //   constructor() {
  //     super();
  //     this.noise = "meow";
  //   }
  // }

  // var result = new Animal();
  // console.log(result.noise);

  ///////////////////////////////////////

  // class Animal {
  //   constructor(lg) {
  //       this.legs = lg;
  //   }
  // }

  // class Dog extends Animal {
  //   constructor() {
  //       super();
  //   }
  // }

  // var result = new Dog();
  // console.log(result.legs);

  // Task 1: Code a Person class
  // class Person {
  //   constructor(name, age, energy) {
  //     this.name = "Tom";
  //     this.age = 20;
  //     this.energy = 100;
  //   }

  //   sleep() {
  //     this.energy += 10;
  //   }
  //   doSomethingFun() {
  //     this.energy -= 10;
  //   }
  // }

  // // Task 2: Code a Worker class

  // class Worker extends Person {
  //   constructor(xp = 0, hourlyWage = 10, name, age, energy) {
  //     super(name, age, energy);
  //     this.xp = xp;
  //     this.hourlyWage = hourlyWage;
  //     this.name = name;
  //     this.age = age;
  //     this.energy = energy;
  //   }
  //   goToWork() {
  //     this.xp += 10;
  //   }
  // }

  // // Task 3: Code an intern object, run methods
  // function intern() {
  //   let intern = new Worker(0, 10, "Bob", 21, 110);
  //   intern.goToWork();
  //   return intern;
  // }

  // // Task 4: Code a manager object, methods
  // function manager() {
  //   let manager = new Worker(100, 30, "Alice", 30, 120);
  //   console.log(manager.doSomethingFun());
  //   return manager;
  // }
  // intern()
  // manager()
  // console.log(intern(),manager())
  // intern()
  // manager()
  // console.log(intern(),manager())

  ////////////////////////////////////////////////////////////////////////////
  // Task 1: Build a function-based console log message generator

  // function consoleStyler(color, background, fontSize, txt ) {

  //   var message = "%c" + txt;

  //   var style = `color: ${color};`

  //  style += `background: ${background};`

  //  style += `font-size: ${fontSize};`

  //   console.log(message, style);

  //  }

  //  // Task 2: Build another console log message generator
  //  function celebrateStyler(reason) {
  //      var fontStyle = "color: tomato; font-size: 50px";
  //      if (reason == "birthday") {
  //          console.log(`%cHappy birthday`, fontStyle);
  //      } else if (reason == "champions") {
  //          console.log(`%cCongrats on the title!`, fontStyle);
  //      } else {
  //          console.log(message, style)
  //      }

  //  }

  //  // Task 3: Run both the consoleStyler and the celebrateStyler functions
  //  consoleStyler("#1d5c63", "#ede6db", "40px", "Congrats!");
  //  celebrateStyler('champions')

  //  // Task 4: Insert a congratulatory and custom message
  //  function styleAndCelebrate(func1,func2) {
  //      console.log(func1,func2)
  //  }
  //  // Call styleAndCelebrate

  //    styleAndCelebrate(consoleStyler('#ef7c8e','#fae8e0','30px','You made it!'), celebrateStyler('champions'))

  //  // consoleStyler("#1d5c63", "#ede6db", "40px", "Congrats!");
  //   function handleClick() {
  //     setLikes(likes + 1);
  //   }
  // Given variables
const dishData = [
  {
      name: "Italian pasta",
      price: 9.55
  },
  {
      name: "Rice with veggies",
      price: 8.65
  },
  {
      name: "Chicken with potatoes",
      price: 15.55
  },
  {
      name: "Vegetarian Pizza",
      price: 6.45
  },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
  let finalPrice = ''
  dishData.map(dish => {
      if (taxBoolean == true  ){
          finalPrice = (dish.price) * tax
      } else if (taxBoolean == false) {
          finalPrice = dish.price
      } else {
          console.log("You need to pass a boolean to the getPrices call!")
          return
      }
      console.log(`Dish: ${dish.name} Price: $${finalPrice}`)
      
  })
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
  getPrices(taxBoolean)
  let discount = 0
  if (typeof(guests) == "number" && guests > 0 && guests < 30) {
     if (guests < 5) {
      discount = 5
  } else if (guests >= 5) {
      discount = 10
     
  } 
  console.log( `Discount is: $${discount}`)
  } else {
      console.log('The second argument must be a number between 0 and 30')
  }
 

 
  
}

// Call getDiscount()
getDiscount(false, 5)
getDiscount(false, "2")
getDiscount(false, -10)
getDiscount(true, 2)
getDiscount(false, 10)

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      {/* <button onClick={handleClick}>Like ({likes})</button> */}
    </div>
  );
}
