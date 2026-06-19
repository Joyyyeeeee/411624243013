// fetch("https://jsonplaceholder.typicode.com/posts/1",
//     // {
//     //     method: "DELETE"
//     // }


// )
// .then(response => response.json())
// .then(data => {console.log(data)})


//Post

// fetch("https://jsonplaceholder.typicode.com/posts",{
//     method: 'POST',
//     headers:{
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         title: 'My Post',
//         body: 'Learning fetch',
//         userId: 1
//     })
// })
// .then(response => response.json())
// .then(data => {console.log(data)})

//PUT

fetch("https://jsonplaceholder.typicode.com/posts/3",{
    method: 'PUT',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'My Post',
        body: 'Learning fetch',
        userId: 5
    })
})
.then(response => response.json())
.then(data => {console.log(data)})

// PATCH

fetch("https://jsonplaceholder.typicode.com/posts/5",{
    method: 'PATCH',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Title',
    })
})
.then(response => response.json())
.then(data => {console.log(data)})
