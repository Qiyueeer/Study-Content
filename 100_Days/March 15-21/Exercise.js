window.onload = function(){

  var checkedAllBtn = document.getElementById("checkedAllBtn");
  checkedAllBtn.onclick = function(){

    var items = document.getElementsByName("items");

    for( var i =0; i<items.length ; i++){
      alert(items[i].checked = true);
    }


var checkedRevBtn = document.getElementById("checkedRevBtn");
checkedRevBtn.onclick = function(){

  for(var i =0; i<items.length; i++){
    if(items[i].checked){
      items[i].checked=false;
    }else{
      items[i].checked = true;
    }

}
  
};
