// const camera = {
//     brand : "Nikon",
//     magapixel : 48,
//     aperture : 1.8,
//     focalLength : 200,
//     cost : 40000
// }
// const {aperture,focalLength, ...rest} = camera ;
// console.log(rest.aperture)
// console.log(aperture)
// console.log(rest)

// const stationary = ["Pencil","Eraser","Stapler"]
// const store = stationary;

// console.log(store)
// const bag = [...stationary]

// console.log(`${stationary[0]}---${store[0]}--${bag[0]}`)
// bag[0] = "Pen";
// bag[0] = "red";

// console.log(`${stationary[0]}--${bag[0]}`)
// console.log(bag)


// const positiveIntegers = [2,3,4] ;
// function getProduct(a,b,c = 2, d = 3) {
//     return a*b*c*d ;
// }
// console.log(getProduct(...positiveIntegers));


// const compositNumbers = [2,4,6,8,9];

// function getProduct(a,b,rest) {
//     return a*b*rest ;
    
// }

// console.log(getProduct(...compositNumbers));


// const room1 ={lenght : 300, height : 200};
// const room2 = {lenght : 100, width : 150,};
// const room3 = {...room1,...room2};
// console.log(room3)
// console.log(Object.getOwnPropertyNames(room3))

const convertToObject1 = (item, category) => ({item,category});

const convertToObject2 = (item,category) => {item,category};

console.log(convertToObject1("Face Cream", "Cosmotics"));
console.log(convertToObject2("Face Cream", "Cosmotics"));

// let apple = {
//     cost : 5
// };
// console.log(apple)

// let banana = apple;
// let mango = {
//     cost : 20 
// };
// banana.cost = 10 

// console.log(apple.cost)
// console.log(banana.cost)
// console.log(mango.cost)

// banana = mango 

// console.log(banana.cost,apple.cost)
// console.log(apple,banana)

// const arr1 = [1,2,3];
// const arr2 = [[...arr1],4,5,6];

// console.log(arr2[1])

// const ceiling1 = {color : "blue", texture : "smooth"};
// const ceiling12 = {rating : 10, texture : "rough"};
// const ceiling3 = {...ceiling1, ...ceiling12};
// const ceiling4 = {...ceiling1, rating : 12};

// console.log(ceiling3)
// console.log(ceiling4)
// console.log(ceiling4.color);
// console.log(ceiling4.texture);
// console.log(ceiling4.rating); 


// const myArray = ["x","y","z"];
// const getLength = (...args) => {
   
//     console.log(args.length);
//     console.log(typeof(args),args)
// }

// console.log(getLength(...myArray))

const pen = {
    color : "Blue",
    brand :"Celio",
    wirte() {
        console.log(this)
    }
}
pen.wirte();


// const myArray = [["subItem1"], "item2", "item3", "item4"];
// const [item1, item2] = myArray ;

// console.log(item1, item2)
// const [subItem1, subItem2] = item1 ;

// console.log(subItem1);
// console.log(subItem2) ;

// const chef = {
//     name : "Peter",
//     cook : () => {
//         console.log(this);
//     },
//     cook1 () {
//         console.log(this)
//     }
// }
// chef.cook();
// chef.cook1();

// function run() {
//     console.log(this);
// }
// run();


console.log("hey")

