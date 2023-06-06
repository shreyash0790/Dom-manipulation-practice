// const posts=[{title:"post one"},{title:"post two"}];

// function getposts(){
//     setTimeout(()=> {
//         let output="";
//         posts.forEach((post,index)=>{
//             output += `<li>${post.title}</li>`;
//         });
//         doucument.body.inerHTML=output;
//     },1000)
// }

// function createposts(post){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(() => {
//          posts.push(post);
//          const error=false;
//          if(!error){
//             resolve();
//          }
//          else{
//             reject("Error occured")
//          }

//         }, 2000);
//     })
// }

// // createposts({title:"post Three"});

// const promise1 = Promise.resolve("hello world");
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject) =>setTimeout(resolve,2000,"goodbye"));

// Promise.all([promise1,promise2,promise3]).then((values)=>console.log(values));


console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 3000);
  });
  
  const addButter =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('butter'), 3000);
  });
  const addcoldDrinks =  new Promise((resolve, reject) => {
    setTimeout(() => resolve('coldDrinks'), 3000);
});

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;

  console.log(`got the ${ticket}`);
  console.log(`Husband:we should go in now`);
  console.log(`Wife: "i am hungry"`);
  
  let popcorn = await getPopcorn;
  console.log(`Husband: here is ${popcorn}`);
	console.log(`Husband:we should go in now`);
  console.log(`Wife: "I dont like popcorn without butter!"`);
  
  let butter = await addButter;
  console.log(`added ${butter}`);

  let coldDrinks = await addcoldDrinks;
  console.log(`added ${coldDrinks}`);
   
  console.log(`Husband:Anything else darling`);
	console.log(`Wife: lets go we are going to miss the preivew`);
  console.log(`Husband: thanks for the reminder *grin*`);
  
  return ticket;
  
};

preMovie().then((t) => console.log(`person3 shows ${t}`));

console.log('person4 shows ticket');