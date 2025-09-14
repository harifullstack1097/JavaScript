//FETCH
// Fetch in Promise --- used to call an API
//API - Application Programming Interface

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(response =>{
    if(!response.ok){
        throw new Error(response.status);
    }
    return response.json();

})
.then(data =>{
    console.log('data',data);
})
.catch(error =>{
    console.error('Error fetching data:',error);
});


//

fetch("https://jsonplaceholder.typicode.com/posts/1")


// here fetch gives back a response object(promise)

.then((response) => {
    console.log("Raw Response: ", response); 

    // to convert this response object into json format we have to use .json() method

    return response.json(); // it also returns a promise
})

// so we have to use another .then to get the actual data
.then((data) => {
    console.log("Data in JSON format: ", data);
})

// If any error occurs then networkissue or wrong url etc...

.catch((error) => {
    console.log("Error happened: ",  error);
});
