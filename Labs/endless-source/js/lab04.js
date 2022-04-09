  // n1 Your
    var n1 = 2;
    var peace = 0;
    var win = 0;
    var lose = 0;
    var all = 0
    function changeImg(){
        var choiceSelect = document.getElementById("choiceSelect");
        n1 = choiceSelect.value;
        document.getElementById("img1").src = "img/"+n1+".png";
    }
    function getChoice(){
        //n2 Enemy
        var n2 = parseInt(Math.random()*3)+1;
        // alert(n2);
        document.getElementById("img2").src = "img/"+n1+".png";
        document.getElementById("img3").src = "img/"+n2+".png";
        pk(n1,n2);
    }
    function pk(n1,n2){
        var result = document.getElementById("result");
        if (n1-n2 == 0) {
            result.innerHTML = "tied"+n1+"-------"+n2;
            peace++;
        }
        if (n1-n2 == -1||n1-n2 == 2) {
            result.innerHTML = "You win !!!"+n1+"-------"+n2;
            win++;
        }
        // if (n1-n2 == 1) {
        if (n1-n2 == 1||n1-n2 == -2 ) {
            // getChoice();
            result.innerHTML = "You lose !!!"+n1+"-------"+n2;
            lose++;
        }
        all++;
        document.getElementById("finalresult").innerHTML = "<p>You play"+all+"Times，Tied"+peace+"Times，Win"+win+"Times，Lose"+lose+"Times</p>";
    }
    function showresult(){
        document.getElementById("finalresult").innerHTML = "<p>You play"+all+"Times，Tied"+peace+"Times，Win"+win+"Times，Lose"+lose+"Times/p>";
    }
