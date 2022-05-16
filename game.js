player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";

question_turn="player1";
answer_turn="player2";

score_1=0;
score_2=0;

document.getElementById("player1_score").innerHTML=score_1;
document.getElementById("player2_score").innerHTML=score_2;

document.getElementById("player_question").innerHTML="Question Turn - "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;

function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer=parseInt(number1)*parseInt(number2);
    console.log(actual_answer);
    question_number="<h4>"+number1+"X"+number2+"</h4";
    input_box="<br>Answer: <input type='text' id='input_check_box'></input>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}

function check()
{
    get_answer=document.getElementById("input_check_box").value;
    if(get_answer==actual_answer)
    {
        if(answer_turn=="player1")
        {
            score_1=score_1+1;
            document.getElementById("player1_score").innerHTML=score_1;
        }
        else
        {
            score_2=score_2+1;
            document.getElementById("player2_score").innerHTML=score_2;
        }
    }

    
        if(question_turn=="player1")
        {
            question_turn="player2"
            document.getElementById("player_question").innerHTML="question Turn-"+player2_name;
        }
        else
        {
            question_turn="player1"
            document.getElementById("player_question").innerHTML="question Turn-"+player1_name;   
        }

        if(answer_turn=="player1")
{
    answer_turn="player2"
            document.getElementById("player_answer").innerHTML="Answer Turn-"+player2_name;
        }
        else
        {
            answer_turn="player1"
            document.getElementById("player_answer").innerHTML="Answer Turn-"+player1_name;   
        }
        document.getElementById("output").innerHTML

        
    }


