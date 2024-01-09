player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player2_score").innerHTML= player2_score;
document.getElementById("player1_score").innerHTML= player1_score;

document.getElementById("player_question").innerHTML= "Question Turn -" + player1_name;
document.getElementById("player_answer").innerHTML= "Answer Turn -" + player2_name;

function send(){
    getWord = document.getElementById("word").value;
    word = getWord.toLowerCase();
    console.log("LOWERCASE OPS");

    charAr1 = word.charAt(1);
    console.log(charAr1);

    lengthDiv2 = Math.floor(word.length/2);
    charAr2 = word.charAt(lengthDiv2);

    lenMinus1 = word.length-1;
    charAr3 = word.charAt(lenMius1);

    RMcharAt1 = word.replace(charAr1, "_");
    RMcharAt2 = RMcharAt1.replace(charAr2,"_");
    RMcharAt3 = RMcharAt2.replace(charAt3,"_");
    console.log(RMcharAt3);

    questionWord = "<h4 id='word_display'> Question: "+RMcharAt3+" </h4>";
    inputBox = "<br>Answer: <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick = 'check()'>Check Answer</button> ";
    row = questionWord+imputBox+checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

function check(){
    getAnswer = document.getElementById("inputCheckBox").value;
    answer = getAnswer.toLowerCase()
    ////
    if (answer == word)
    {
        if(answerTurn == "player1")
        {
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = player2_score;

        }
    }
    ////
        if(questionTurn == "player1")
        {
            questionTurn = "player2";
            document.getElementById("player_question").innerHTML = "Question Turn Is:" + player2_name;
        }
        else
        {
            questionTurn = "player1"
            document.getElementById("player_question").innerHTML = "Question Turn Is:" + player1_name;
        }
    ////
        if(answerTurn = "player1")
        {
            answerTurn = "player2"
            document.getElementById("player_answer").innerHTML = "Answer Turn Is:" + player2_name;
        }
        else
        {
            answerTurn = "player1"
            document.getElementById("player_answer").innerHTML = "Answer Turn Is:" + player1_name;
        }
    ////
}