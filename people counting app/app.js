let countEL = document.getElementById("count-el")
let count = 0;

let saveEl = document.getElementById("save-el")

function increment(){
    count = count+1
    countEL.textContent = count
}

function save(){
let countstre = count +" -"
saveEl.textContent = saveEl.textContent+countstre
countEL.textContent =0
count =0
}
