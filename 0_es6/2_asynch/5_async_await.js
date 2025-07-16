// 5_async_await.js

async function init(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    users.forEach( user => {
            console.log(user['name'] + "/"  + user['address']['city']  );
        })
}

init();

console.log('다른 작업중');