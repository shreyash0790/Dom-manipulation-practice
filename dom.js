// console.dir(document);
// document.title="Pc parts Revised";
// console.log(document.doctype);
// console.log(document.forms);
// console.log(document.links);

// var headertitle=(document.getElementById('header-title'));
// headertitle.textContent='New parts';
// headertitle.innertext='Goodbye';

// headertitle.innerHTML='<h3>New Parts</h3>';
// var header =(document.getElementById('main-header'));
// header.style.borderBottom='solid 3px #965';




// var newhead=(document.getElementsByClassName('list-group-item'));
// console.log(newhead);
// for(var i=0;i<newhead.length;i++){
//     newhead[i].style.fontWeight='bold';
// }
// newhead[2].style.backgroundColor='green';

// var li=document.getElementsByTagName('li');
// console.log(li);
// for(var i=0;i<li.length;i++){
//     li[i].style.fontWeight='bold';
// }
// li[3].style.backgroundColor='green';

// var input=document.querySelector('input');
// input.value='Type our text here';


// var submit=document.querySelector('input[type="submit"]');
// submit.value='SEND';

// var items=document.querySelector('.list-group-item:nth-child(2)');
// items.style.backgroundColor='green';

// var items=document.querySelector('.list-group-item:nth-child(3)');
// items.style.color='white';

// var odd=document.querySelectorAll('li:nth-child(odd)');

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='green';
// }

// var items=document.querySelectorAll('.list-group-item');
// console.log(items);
// items[1].style.color='green';

// Transversing the dom

// var itemlist=document.querySelector('#items');
// // parent node
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor='#f4f4f4';

// parent element 

// var itemlist=document.querySelector('#items');
// // parent node
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor='#f4f4f4';

// // children node 

// console.log(itemlist.children);
// itemlist.children[2].style.backgroundColor='yellow';

// // first child

// console.log(itemlist.firstChild);

// first element child 

// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent='hellos';

// last element child

// itemlist.lastElementChild.textContent='hellos boys';

// next element siblings 

// itemlist.nextElementSibling.textContent='hello';

// previous element siblings 

// console.log(itemlist.previousElementSibling);

// create element 


// var newdiv=document.createElement('div');

// // add class
// newdiv.className='hello';

// // add id
// newdiv.id='hello1';

// // add attr
// newdiv.setAttribute=('title','hello div');

// // create node
// var newdivtext=document.createTextNode('HEllo');

// // add text to div

// newdiv.appendChild(newdivtext);

// // adding craeted to webpage

// var contain=document.querySelector('header .container'); 
// // this means in the header we want conatiner class

// var h=document.querySelector('header h1');

// contain.insertBefore(newdiv,h);
// //this takes what we are inserting and we are inserting before


