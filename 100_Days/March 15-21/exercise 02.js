var sendBtn = document.getElementById("sendBtn");
sendBtn.onclick = function(){
  for(var i =0; i<items.length; i++){

    if(items[i].checked){
      alert(items[i].value);

    }
  }
}


var checkAllBox =document.getElementById("checkedAllBox");
checkedBox.onclick = function(){thi

for(var i =0; i<items.length;i++){
  items[i].checked = checkedAllBox.checked;

}}
