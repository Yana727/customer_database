
const list = document.querySelector('ul')

for (var i = 0; i < customers.results.length; i++) {
  const customer = customers.results[i]
  const item = document.createElement('li')
  item.innerHTML = `
    <div class= "profile">
    <img src="${customer.picture.large}">
    <h2>${customer.name.first} ${customer.name.last}</h2>
    <p>${customer.email} </p>
    <p>${customer.location.street}</p>
    <p>${customer.location.city} ${customer.location.state} ${customer.location
    .postcode}</p>
    <p>${customer.phone}</p>
    </div>
     `

  list.appendChild(item)
}
