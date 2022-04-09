//type box
var send =document.getElementById('send');
var pic =document.getElementById('pic');
var txt =document.getElementById('inp');
var info_box = document.getElementsByClassName('info_box')[0];
var onoff=true;

//change
pic.onclick=function(){
    if(onoff){
        pic.src='img/2.jpg';
        onoff=false;
    }
};

//send content
send.onclick=function(){
    if(txt.value===''){
        alert('Please type Something');
    }

    else{

        var nDiv = document.createElement('div');
        var spans = document.createElement('span');
        var Imgs = document.createElement('img');
        var Txts = document.createTextNode(txt.value);
        var info_box = document.getElementsByClassName('info_box')[0];
        spans.appendChild(Txts);
        nDiv.appendChild(spans);
        nDiv.appendChild(Imgs);
        // nDiv.style.display='block';
        info_box.insertBefore(nDiv,info_box.lastChild);
        spans.className='infor';
        nDiv.className='info_r';
        Imgs.src='img/2.jpg';


        var replys = ['lab03', 'lab03', 'lab03', 'lab03', 'lab03'];
        //use math floor()
        var random = replys[Math.floor(Math.random() * 5)];
        //Automatic reply
        var nDiv = document.createElement('div');
        var spans = document.createElement('span');
        var Imgs = document.createElement('img');
        var Txts = document.createTextNode(random);
        var info_box = document.getElementsByClassName('info_box')[0];
        spans.appendChild(Txts);
        nDiv.appendChild(spans);
        nDiv.appendChild(Imgs);
        // nDiv.style.display='block';
        info_box.insertBefore(nDiv,info_box.lastChild);
        spans.className='infol';
        nDiv.className='info_l';
        Imgs.src='img/1.jpg';

    }
    txt.value='';
}
