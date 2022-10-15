//creat a function to export

function getData(targetURL, callback) {

  fetch(targetURL) 

  .then(res => res.json()) 

  .then(data => {
      console.log(data);
      callback(data);
  })

  .catch(error => console.log(error));
}

export { getData }