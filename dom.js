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


// var mylist=document.getElementById("items");
// var newlist=document.createElement('ul');
// newlist.textContent="HEllo";
// mylist.insertBefore(newlist,mylist.firstChild);

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value +" "+ document.getElementById('dis').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append del button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);

 
 
   // Create edit button element
   var editBtn = document.createElement('button');
 
   // Add classes to edit button
   editBtn.className = 'btn btn-danger btn-sm float-right delete';
   editBtn.style.marginRight="10px"
 
   // Append text node
   editBtn.appendChild(document.createTextNode('Edit'));
 
   // Append  edit button to li
   li.appendChild(editBtn);
 
   // Append li to list
   itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

  Array.from(items).forEach(function(dis){
    var itemdis = dis.firstChild.textContent;
    
    if(itemdis.toLowerCase().indexOf(text) != -1){
      dis.style.display = 'block';
    } else {
      dis.style.display = 'none';
    }
  });
}

