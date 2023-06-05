const posts=[{title:"post one"},{title:"post two"}];

function getposts(){
    setTimeout(()=> {
        let output="";
        posts.forEach((post,index)=>{
            output += `<li>${post.title}</li>`;
        });
        doucument.body.inerHTML=output;
    },1000)
}

function createposts(post){
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
         posts.push(post);
         const error=false;
         if(!error){
            resolve();
         }
         else{
            reject("Error occured")
         }

        }, 2000);
    })
}

// createposts({title:"post Three"});

const promise1 = Promise.resolve("hello world");
const promise2 = 10;
const promise3 = new Promise((resolve,reject) =>setTimeout(resolve,2000,"goodbye"));

Promise.all([promise1,promise2,promise3]).then((values)=>console.log(values));