let count = 0
let lblCount = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment(){
    count += 1
    lblCount.textContent = count
}

function save(){
    saveEl.textContent += " - " + count
    count = 0
    lblCount.textContent = count
}
