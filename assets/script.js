// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Chaznae Wiley" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0
// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbQ = document.querySelector('#qty-gb')
const totalQ = document.querySelector('#qty-total')
const ccQ = document.querySelector('#qty-cc')
const sQ = document.querySelector('#qty-sugar')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
// Code to update name display
credit.textContent = `Created by ${'Chaznae Wiley'}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function(){
    gb++
    total++
    totalQ.textContent = `${total}`
console.log('gbPlusBtn clicked') 
console.log(gb)
gbQ.textContent = `${gb}`
})
gbMinusBtn.addEventListener('click', function(){
    gb--
    console.log(`gbMinusBtn clicked`)
    gbQ.textContent = `${gb}`


})
ccPlusBtn.addEventListener('click', function(){
    cc++
    console.log(`ccPlusBtn clicked`)
    ccQ.textContent =`${cc}`
})
ccMinusBtn.addEventListener('click', function(){
    cc--
    console.log(`ccMinusBtn clicked`)

})

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked


// TODO: Hook up event listeners for the rest of the buttons