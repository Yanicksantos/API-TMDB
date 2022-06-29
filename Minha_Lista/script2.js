
const url1={
    base: "https://jsonplaceholder.typicode.com/posts",
    token: "https://api.themoviedb.org/4/auth/request_token"
}


/*fetch(url1.token, {
    method: "POST",
    headers:{
        "Content-Type": "application/json;charset=utf-8",
        "Authorization": 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjc4ZWMzN2EyMGRiNzZmYWRkMmE4ZDAwNWVmYzUxNSIsInN1YiI6IjYyOTIxNGY3ZmI4MzQ2MDA1MDcwZWQ1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wcmFkAQHRjv4XyGuzjdwYHJveBiKD9LYa32om1XOGnc' 
    },
    body:{
        "redirect_to": "http://www.themoviedb"
    }
}).then(response => response.json()).then(data => console.log(data))*/



fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify({
    title: 'a vida é dura',
    body: 'Voce vive só e ora mais'
  })
})
  .then(response=> response.json())
  .then(json => console.log(json));


  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 101,
    title: 'Yanick',
    body: 'bar'
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));


  fetch('https://jsonplaceholder.typicode.com/posts/101', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'A vida é dura de novo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));


fetch('https://jsonplaceholder.typicode.com/posts/101', {
  method: 'DELETE',
}).then(x => x.json()).then(y => console.log(y))


