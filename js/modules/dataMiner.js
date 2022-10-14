//creat a function to export

function getData(targetURL, callback) {
    console.log(`it's aliiive`);

    // use the Fetch API to go and get out data
    fetch(targetURL) // go 
    // pares the Json object -> turn it into a plain JS object
    .then(res => res.json()) //res means response -> the data retrieved
    //res.jason() is a built-in method or function that turns the JSON
    .then(data => {
        console.log(data);
        callback(data);
    })
    //if breaks anywhere along the line, catch error event
    // here and report it to the developer
    .catch(error => console.log(error));
}

export {getData}