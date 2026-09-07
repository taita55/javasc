

let valcount=document.getElementById("count-el")
let ab=document.getElementById("save-el")


let count = 0
function increment(){
    
    count = count + 1
    valcount.textContent = count
    
}

function save(){
    let dispa=count + " - "
    ab.textContent +=dispa
    count=0
    valcount.textContent=0

}

