//heading here
//const title = document.createElement('h1')
//const body = document.querySelector('body')
//const section1 = document.createElement('section')
//title.textContent = 'Internal Company Directory'
//body.appendChild(section1)
//section1.appendChild(title)
//customers = objects
//let main = document.createElement('main')
//let pic = document.createElement('img')
//let first = document.createElement('p')
//let last = document.createElement('p')
//let email = document.createElement('p')
//let tel = document.createElement('p')
const list = document.querySelector('ul')

for (var i = 0; i < customers.results.length; i++) {
  const customer = customers.results[i]
  const item = document.createElement('li')
  item.innerHTML = `
    <h2>${customer.name.first} ${customer.name.last}</h2>
    <p>${customer.email} </p>
    <p>${customer.location.street}</p>
    <p>${customer.location.city} ${customer.location.state} ${customer.location
    .postcode}</p>
    <p>${customer.phone}</p>
    <img src="${customer.picture.large}"> `

  list.appendChild(item)
}
