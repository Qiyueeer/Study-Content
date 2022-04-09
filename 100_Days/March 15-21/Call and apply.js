
function fun(a,b){
  console.log("a="+a );
  console.log("b="+b );
  alert("I am function");
}

/*
*call() apply()
*/
fun.apply();
fun.call();
fun();


fun. call(obj);
var obj = {
  name:"obj"
  sayName:function
  alert(this.name);
};
var obj2 = {name: "obj 2"};
fun();

obj.sayName.apply(obj2);
=
