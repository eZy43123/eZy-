console.log(" I HATE MY LIFE"); // this is like a print command 
console.log("F8AR IS AN ASSHOLE ");
//window.alert(`This is a pop up `) // pop up alert
document.getElementById("greet").textContent = `Greetings` // so we store a value in html and get it here with JS it's like a modules. // 
document.getElementById("info").textContent = `Learning how doc.element work`
document.getElementById("arabic").textContent = ` نتعلم شلون نستعمل دوكس`

// variables //

let x = 1.4; // there is no int or float or string //
let y = 200; // or x = 20; //
let f8ar = 20;
let name = "ezy"; // it's better to always put semi colon//
let f8arName = `F8ar Ahmed talal`;

console.log(typeof f8arName);
console.log(f8arName);
console.log(`f8ar is ${f8ar} years old`); // $ = place holder //
console.log(typeof f8ar); // this tells the type of smth 

// booleans // 

let F8 = true;
let F7 = false;
let frhard_is_a_good_doc = false;
console.log(frhard_is_a_good_doc);
console.log(typeof frhard_is_a_good_doc);


// Examples //

let namee = "ali saad";
let collage = true;
console.log(`is ${namee} in collage ? ${collage }`); // console.log uses `` //


document.getElementById("lilith_name").textContent = ` Lilith theNOcoexistanceofyouandme  `;
document.getElementById("lilith_age").textContent = `age is 19`;
document.getElementById("lilith_color").textContent = `wears white and red dress`;


const sound = document.getElementById("LILI")
sound.volume = 0.05;



















// GitHub Pages / any real website: browsers BLOCK autoplay with sound until the visitor interacts with the page.
// So we try to play now, and if it's blocked we start the music on the first click / key press / tap.
const unlockEvents = ["click", "keydown", "touchend"];
function startMusic() {
  sound.play().then(() => {
    unlockEvents.forEach(e => document.removeEventListener(e, startMusic)); // playing now, stop listening
  }).catch(() => {}); // still blocked, wait for the next interaction
}
unlockEvents.forEach(e => document.addEventListener(e, startMusic));
startMusic();
