console.log(customers);

let template = document.querySelector('body');
template.innerHTML = `<h1>Internal Company Directory</h1>`
//let template = document.querySelector('body');
for(i = 0; i < customers.results.length; i ++){

template.innerHTML += `
<div class="row">
<img class = "picture" src = ${customers.results[i].picture.large}>
<p class = "name"> ${customers.results[i].name.title} ${customers.results[i].name.first} ${customers.results[i].name.last}</p>
<p class = "email">${customers.results[i].email}</p>
<p class = "address">${customers.results[i].location.street} <br>${customers.results[i].location.city}, ${customers.results[i].location.state}</p>
<p class = "number">${customers.results[i].cell}</p>
</div>`;
}
