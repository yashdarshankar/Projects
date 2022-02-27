console.log("Welcome to TicTacToe")
let turn = "Q"
let count = 0

//main logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(Element =>{
    let boxtext = Element.querySelector('.boxtext')
    Element.addEventListener('click',()=>{
        if(boxtext.innerText == ''){
            boxtext.innerText = turn;
            count++;
            document.getElementById("count").innerHTML = "The count of Queens :-" + count;
            if(count > 8){alert("Your count of queen is greater than 8")}

        }
    })
})


function checking(){

    if(document.getElementById("d14").innerText==turn && document.getElementById("d27").innerText==turn && document.getElementById("d33").innerText==turn && document.getElementById("d48").innerText==turn && document.getElementById("d52").innerText==turn && document.getElementById("d65").innerText==turn && document.getElementById("d71").innerText==turn && document.getElementById("d86").innerText==turn)
    {
    document.getElementById("result").innerHTML = "Your Won the N-queen Game"
 
    }
    else if(document.getElementById("d15").innerText==turn && document.getElementById("d22").innerText==turn && document.getElementById("d34").innerText==turn && document.getElementById("d47").innerText==turn && document.getElementById("d53").innerText==turn && document.getElementById("d68").innerText==turn && document.getElementById("d76").innerText==turn && document.getElementById("d81").innerText==turn)
    {
    document.getElementById("result").innerHTML = "Your Won the N-queen Game"
 
    }
    else if(document.getElementById("d14").innerText==turn && document.getElementById("d22").innerText==turn && document.getElementById("d37").innerText==turn && document.getElementById("d43").innerText==turn && document.getElementById("d56").innerText==turn && document.getElementById("d68").innerText==turn && document.getElementById("d75").innerText==turn && document.getElementById("d81").innerText==turn)
    {
    document.getElementById("result").innerHTML = "Your Won the N-queen Game"
 
    }
    else if(document.getElementById("d14").innerText==turn && document.getElementById("d26").innerText==turn && document.getElementById("d38").innerText==turn && document.getElementById("d43").innerText==turn && document.getElementById("d51").innerText==turn && document.getElementById("d67").innerText==turn && document.getElementById("d75").innerText==turn && document.getElementById("d84").innerText==turn)
    {
    document.getElementById("result").innerHTML = "Your Won the N-queen Game"
 
    }
    else if(document.getElementById("d13").innerText==turn && document.getElementById("d26").innerText==turn && document.getElementById("d38").innerText==turn && document.getElementById("d41").innerText==turn && document.getElementById("d54").innerText==turn && document.getElementById("d67").innerText==turn && document.getElementById("d75").innerText==turn && document.getElementById("d82").innerText==turn)
    {
    document.getElementById("result").innerHTML = "Your Won the N-queen Game"
 
    }
    else if(document.getElementById("d15").innerText==turn && document.getElementById("d23").innerText==turn && document.getElementById("d38").innerText==turn && document.getElementById("d44").innerText==turn && document.getElementById("d57").innerText==turn && document.getElementById("d66").innerText==turn && document.getElementById("d71").innerText==turn && document.getElementById("d82").innerText==turn)
    {
    document.getElementById("result").innerHTML = "Your Won the N-queen Game"
 
    }
    else if(document.getElementById("d15").innerText==turn && document.getElementById("d27").innerText==turn && document.getElementById("d34").innerText==turn && document.getElementById("d41").innerText==turn && document.getElementById("d53").innerText==turn && document.getElementById("d68").innerText==turn && document.getElementById("d76").innerText==turn && document.getElementById("d82").innerText==turn)
    {
    document.getElementById("result").innerHTML = "Your Won the N-queen Game"
 
    }
    else if(document.getElementById("d14").innerText==turn && document.getElementById("d21").innerText==turn && document.getElementById("d35").innerText==turn && document.getElementById("d48").innerText==turn && document.getElementById("d56").innerText==turn && document.getElementById("d63").innerText==turn && document.getElementById("d77").innerText==turn && document.getElementById("d82").innerText==turn)
    {
    document.getElementById("result").innerHTML = "Your Won the N-queen Game"
    }

    else if(document.getElementById("d13").innerText==turn && document.getElementById("d26").innerText==turn && document.getElementById("d34").innerText==turn && document.getElementById("d41").innerText==turn && document.getElementById("d58").innerText==turn && document.getElementById("d65").innerText==turn && document.getElementById("d77").innerText==turn && document.getElementById("d82").innerText==turn)
    {
    document.getElementById("result").innerHTML = "Your Won the N-queen Game"
    }
    else if(document.getElementById("d16").innerText==turn && document.getElementById("d22").innerText==turn && document.getElementById("d37").innerText==turn && document.getElementById("d41").innerText==turn && document.getElementById("d54").innerText==turn && document.getElementById("d68").innerText==turn && document.getElementById("d75").innerText==turn && document.getElementById("d82").innerText==turn)
    {
    document.getElementById("result").innerHTML = "Your Won the N-queen Game"
    }
    else if(document.getElementById("d14").innerText==turn && document.getElementById("d27").innerText==turn && document.getElementById("d31").innerText==turn && document.getElementById("d48").innerText==turn && document.getElementById("d55").innerText==turn && document.getElementById("d62").innerText==turn && document.getElementById("d76").innerText==turn && document.getElementById("d83").innerText==turn)
    {
    document.getElementById("result").innerHTML = "Your Won the N-queen Game"
    }  
    else if(document.getElementById("d16").innerText==turn && document.getElementById("d24").innerText==turn && document.getElementById("d37").innerText==turn && document.getElementById("d41").innerText==turn && document.getElementById("d58").innerText==turn && document.getElementById("d62").innerText==turn && document.getElementById("d74").innerText==turn && document.getElementById("d83").innerText==turn)
    {
    document.getElementById("result").innerHTML = "Your Won the N-queen Game"
    }
    else{
        document.getElementById("result").innerHTML = "Your Loss the N-queen Game"
    }

}

function reseting(){
    count = 0;
    document.getElementById("count").innerHTML = "The count of Queens :-" + count;
    for(let i=1; i<=8;i++)
    {
        for(let j=1; j<=8;j++)
        {
            let temp = "d"+i+j;
            document.getElementById(temp).innerHTML = null;
        }

    }
    document.getElementById("result").innerHTML = null;
}