function loginUser(callback){

    setTimeout(() => {
        console.log("user has logged in")
        callback()
    })
}



function fetchUser(callback){

    setTimeout(() =>{
        console.log("data is fetched")

        callback()
    }, 1000)

}


function updateUi(callback){
    setTimeout(() =>{
        console.log("ui has been is updated")

        callback()
    }, 1000)
}


function sendEmail(callback){
    setTimeout(() =>{
        console.log("email has been sent")

        callback()
    }, 1000)
}




//CALLBACK HELL:--------------
//NOTE: Callback hell is a situtataion in javascript where deeply nested callback functions.
//      make code difficult to read, understand and maintain. this often occurs when handling
//      asynchronous opertaion where one operations's completed depend on the result of another


loginUser(() => {
    fetchUser(() => {
        updateUi(() => {
            sendEmail(() => {
                console.log("all task has been completed")
            })
        })
    })
})