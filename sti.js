function fff(idnote, idimage) {
    let note = document.getElementById(idnote).value;
    document.getElementById(idimage).src = "x"+note+".jpg";
}


function calcultotal ()

{

let s=0;

for (i=1; i<=4; i++)

{

const idnote="serv"+i;

s=s+parseInt(document.getElementById (idnote).value);

}

document.getElementById ("total").innerHTML=String(s)+"/20";

}



function inconnue() {
    for (let i = 1; i <= 4; i++) {
        let idimage = "imgser" + i;
        document.getElementById(idimage).src = "x0.jpg";

        let idnote = "serv" + i;
        document.getElementById(idnote).value = 0;
    }
}