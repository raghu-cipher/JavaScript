

let movie = {
    name : "RRR",
    director : "Rajamouli",
}

console.log(movie);
// adding key and values to the object ; 

movie.actor = "Prabhas" ;
movie.actress = "Anushka" ;
movie["budget"] = "400cr";
 
console.log(movie);
movie.budget = "500cr" ;

// accessing values from object 
// .notation and [] square bracket notation
console.log(movie.budget);
console.log(movie["actress"]);

let mainLead = "actor" ;
console.log(movie[mainLead]);
console.log(movie.mainLead); // undefined

// creating another way to object 

// using new operator object Constructor ;

let freedomFighters = new Object();
freedomFighters.bagatSingh = new Object();

console.log(freedomFighters);
freedomFighters.bagatSingh.name = "Bhagat Singh";
freedomFighters.bagatSingh.born = "27-september-1907";
freedomFighters.bagatSingh.died = "23-march-1931";

freedomFighters.bose = new Object();
freedomFighters.bose.name = "Sarat Chandra Bose";
freedomFighters.bose.born ="6-sept-1889";
freedomFighters.bose.died = "20-feb-1940"


console.log(freedomFighters.bose.name);

// Using new Operator with Constructor function :
  // step 1 --> create constructor function :
  function user(name,age,place) {
    this.name = name;
    this.age = age ;
    this.place = place ;
  }

  // step 2 --> create object with constructor function call :
   
   let user1 = new user("abc", 25, "Hyderabad");
   let user2 = new user("xyz", 26, "Warangal");
   console.log(user2);
   console.log(user1.age);
  

