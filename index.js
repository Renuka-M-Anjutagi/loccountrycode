var res = fetch("https://api.opendota.com/api/proPlayers");
res.then((data) => data.json())
.then((data1) => console.log(data1.avatar));
var res = fetch("https://api.opendota.com/api/proPlayers");
res.then((data) => data.json())
.then((data1) => foo(data1));


var container = document.createElement("div")
container.className ="container"

var row = document.createElement("div")
row.className ="row"


function foo(data1)
{
    for(var i =0 ; i< data1.length;i++)
    {
        var col = document.createElement("div")
        col.className = "col-md-4"
        col.innerHTML = `<div class="card" style="width: 18rem;">
        <div class="card-header">
        <h5 class="card-title">${data1[i].team_name}</h5>

        </div>
        <img src="${data1[i].avatar}" class="card-img-top" style="max-width: 540px;" alt="...">
   
        <div class="card-body">
          <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: ${data1[i].name}</li>
          <li class="list-group-item">Local countrycode:  ${data1[i].loccountrycode}</li>
         </ul>
          
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`

        row.append(col)
        container.append(row)
        document.body.append(container)
    }
}