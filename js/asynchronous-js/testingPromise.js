//---------------------------------------chaining------------------------------
fetch("http://randomuser.me/api")
  .then((result) => {
    return result.json();
  })
  .then((result) => {
    console.log(result.results[0]);
  })
  .catch((err) => {
      console.log(err)
  })



//------------------------------------async await------------------------------------
async function fetchData() {

    try{

        let result = await fetch("http://randomuser.me/api");
        let data = result.json();
        console.log(data);
    } catch(err){
        console.log(err)
    }
}

fetchData()
