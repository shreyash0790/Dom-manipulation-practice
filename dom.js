console.dir(document);
document.title="Pc parts Revised";
console.log(document.doctype);
console.log(document.forms);
console.log(document.links);

var headertitle=(document.getElementById('header-title'));
headertitle.textContent='New parts';
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

var odd=document.querySelectorAll('li:nth-child(odd)');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}

var items=document.querySelectorAll('.list-group-item');
console.log(items);
items[1].style.color='green';



