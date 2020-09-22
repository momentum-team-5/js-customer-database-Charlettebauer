let filteredNames = []

for (let customer of customers){
    
let target = document.querySelector('.customer')
//create ul
let list = document.createElement('ul')
//append ul to target in dom
target.appendChild(list)
console.log(list)
//create an li
let listItem = document.createElement('li')
//append to ul 
list.appendChild(listItem)
console.log(listItem)
//create img
let imgCustomer = document.createElement('img')
imgCustomer.src = customer.picture.thumbnail
console.log(imgCustomer)
listItem.appendChild(imgCustomer)
// create name title h3
let nameTitle = document.createElement('h3')
nameTitle.innerText = customer.name.first + customer.name.last
//append to img
listItem.appendChild(nameTitle)
console.log(nameTitle)
//create email address p
let email = document.createElement('h5')
email.innerText = customer.email
//append to li
listItem.appendChild(email)
console.log(email)
//create mailing address 
