dobj = new Date();
year =dobj.getFullYear();
month =dobj.getMonth();
day =dobj.getDate();
hour=dobj.getHours();
minute=dobj.getMinuters();
second=dobj.getSeconds();

str=year+'-'+month+'-'+day+''+hour+minute+second;

alert();


setInterval(function(){
    dobj=new Date();
    year=dobj.getFullYear();
    day =dobj.getDate();
hour=dobj.getHours();
minute=dobj.getMinuters();
second=dobj.getSeconds();
str=year+'-'+month+'-'+day+''+hour+minute+second;
document.title=str;
})
