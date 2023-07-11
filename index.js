let homeNumber = 0
document.getElementById("home-Number").textContent = homeNumber



function homeScore1() {
    console.log("score one")
    let result = homeNumber += 1
    document.getElementById("home-Number").textContent = result
  
}

function homeScore2() {
    console.log("score 2")
    let result = homeNumber += 2
    document.getElementById("home-Number").textContent = result
}

function homeScore3() {
    console.log("score 3")
    let result = homeNumber += 3
    document.getElementById("home-Number").textContent = result
}



let gusNumber = 0

document.getElementById("guest-Number").textContent = gusNumber

function guestScore1() {
    console.log("guest score 1")
    let result = gusNumber += 1
    document.getElementById("guest-Number").textContent = result
}

function guestScore2() {
    console.log("guest score 2")
    let result = gusNumber += 2
    document.getElementById("guest-Number").textContent = result
}

function guestScore3() {
    console.log("guest score 3")
    let result = gusNumber += 3
    document.getElementById("guest-Number").textContent = result
}

function resetBtn() {
    let result = 0
    document.getElementById("guest-Number").textContent = result
    document.getElementById("home-Number").textContent = result
    
}
