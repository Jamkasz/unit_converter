/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

function convertToMeters(feet){
    return (feet/3.281).toFixed(3)
}

function convertToFeet(meters){
    return (meters*3.281).toFixed(3)
}

function convertToLiters(gallons){
    return (gallons/0.264).toFixed(3)
}

function convertToGallons(liters){
    return (liters*0.264).toFixed(3)
}

function convertToKilograms(pounds){
    return (pounds/2.204).toFixed(3)
}

function convertToPounds(kilograms){
    return (kilograms*2.204).toFixed(3)
}

function render(units) {
    lengthEl.textContent = `
        ${units} meters = ${convertToFeet(units)} feet |
         ${units} feet = ${convertToMeters(units)} meters
    `
    volumeEl.textContent = `
        ${units} liters = ${convertToGallons(units)} gallons |
         ${units} gallons = ${convertToLiters(units)} liters
    `
    massEl.textContent = `
        ${units} kilos = ${convertToPounds(units)} pounds |
         ${units} pounds = ${convertToKilograms(units)} kilos
    `
}

convertBtn.addEventListener("click", function() {
    render(Number(inputEl.value))
})

inputEl.addEventListener("input", function () {
    this.style.width = Math.max(this.value.length, 2) + 1 + "ch";
})