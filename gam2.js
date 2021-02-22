player1NAME= localStorage.getItem("player1NAME");
player2name= localStorage.getItem("player2name");

p1s = 0;
p2s = 0;

document.getElementById("player1NAME").innerHTML = player1NAME + ":";
document.getElementById("player2name").innerHTML = player2name + ":";

document.getElementById("p1s").innerHTML = p1s;
document.getElementById("p2s").innerHTML = p2s;

document.getElementById("playerq").innerHTML = "Question Turn-" + player1NAME;
document.getElementById("playera").innerHTML = "Answer Turn-" + player2name;

function sendu(){
    get_word= document.getElementById("word").value;
    word =get_word.toLowerCasE();
    console.log("word in lowercase =" + word);

    chartAt1= word.chartAt(1);
    console.log(chartAt1);

    lengthd2 = Math.floor(word.length/2);
    chartAt2= word.chart(lengthd2);
    console.log(chartAt2);

    lenghtm1=word.length-1;
    chartAt3= word.chartAt(lenghtm1);
    console.log("chartAt3");
     
    rch1=word.replace(chartAt1, "_");
    rch2=rch1.replace(chartAt2, "_");
    rch3=rch2.replace(chartAt3, "_");
    console.log("rch3");

    qword="<h4 id='wordisplay'> Q."+rch3+"</h4>";
    inputbox="<br> Answer: <input type='text' id='inputcheccck'>";
    checkq="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=qword+ inputbox+ checkq;
    document.getElementById("ourput").innerHTML= row;
    document.getElementById("word").value=" ";
}

qturn="player1NAME";
aturn="player2name";

function check(){
    get_answer= document.getElementById("inputcheccck").value;
    answer=get_answer.toLowerCasE();
    console.log("answer in lower case-" + answer);
    if(answer==word){
        if(aturn=="player1"){
            p1s= p1s+1;
            document.getElementById("p1s").innerHTMl= p2s;
        }
        else{
            p2s=p2s + 1;
            document.getElementById(p2s).innerHTML=p2s;
        }

        if(qturn=="player1"){
          qturn="player2";
          document.getElementById("player_question"),innerHTMl= "Question turn - " +player2name;
        }
        else{
            qturn="player1";
            document.getElementById("player_question"),innerHTMl= "Question turn - " +player1NAME;
        }

        if(aturn=="player1"){
            aturn="player2";
            document.getElementById("player_answer"),innerHTMl= "Answer turn - " +player2name;
          }
          else{
              qturn="player1";
              document.getElementById("player_answer"),innerHTMl= "Answer turn - " +player1NAME;
          }
    }

    document.getElementById("ourput").innerHTMl="";
}