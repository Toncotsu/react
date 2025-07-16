
// 4_fetch.js

fetch("https://jsonplaceholder.typicode.com/users")
    //.then( response => { console.log(response) });
    //.then( response => { response.json() }  )         // ********** 잘못 코딩
    //.then( response => { return response.json() }  )  // 올바른 코딩
    .then( response =>  response.json()  )              // ********** 축약형
    .then( users =>{ 
     
        users.forEach( user => {
            //console.log(user.name);
            console.log(user['name'] + "/"  + user['address']['city']  );
        })
    
    } );

console.log('다른 작업 중');