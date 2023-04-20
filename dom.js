console.dir(document);
document.title="Pc parts Revised";
console.log(document.doctype);
console.log(document.forms);
console.log(document.links);

var headertitle=(document.getElementById('header-title'));
console.log(headertitle);
headertitle.textContent='New parts';
headertitle.innertext='Goodbye';

headertitle.innerHTML='<h3>New Parts</h3>';
var header =(document.getElementById('main-header'));
header.style.borderBottom='solid 3px #965';
var newhead=(document.getElementsByClassName('title'));
console.log(newhead);
newhead[0].style.fontWeight='bold';
newhead[0].style.backgroundColor='green';