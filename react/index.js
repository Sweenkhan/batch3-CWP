// Q what is react?
//1 react is a front-end javascript library.
//2. react was developed by the facebook software engineer jordan walke.
//3 react is a tool for building ui components.


//Q2. what are the features of react.
//!1. JSX (javascript syntax extension)
//2. component based architecture.
//3. virtaul DOM
//4. react is spa application

//Q.3 What is a component in react?
// components are independent and reausable bits of code. they serve the same purpose as javascript
// but work is isolation and return HTML.
// it block of code for UI


// . empty fragments  <> </>
// to groupism your code into one child




//1 way-----------------------------first day learning----------------------CRA
// npx create-react-app 01-react
// cd 01-react
// npm start

//note: you can write extention name (js or jsx)





//2nd way----------------------------second day learning----------------------------vite + react
// npm create vite@latest 
// 02-vite-react                      (project name)
// react                              (choose from dropdown )
// javaScript                         (choose from dropdown)


// cd 02-vite-react, npm install, npm run dev
//note: you have to give extenstion name for react component (jsx only)



//--------------------------------------PROPS---------------------------------------
//Props are arguments passed into React components.
//Props are passed to components via HTML attributes.
//props are one way data communication. (from parent to child)




//--------------------------HOOKS IN REACT JS------------------------------------
// REACT hooks are function that allow you to use state and other react features in functional component.
// manage state, side effect and other logic without writing class component.



//State Hook:-> to manage state in react. (suppose a variabel which is changing later. and you want to show the result into your browser).

//UseEffect Hook:-> to handle effect in react component (mostly use for api). useEffect hook takes two argument(first an action, and second will a deppendency array)

//note:->  (() => {}, [])  if array is empty. useEffect will work only for once. when you component will render on browser
//(() => {}, [search])  if dependency array has a dependecy. whenevery state of dependency of array will change. useEffect will run again.
//(() => { return ()=> {}}, []). if you have used return fucntion . it will controlled the component behaviour after removed component from the document.




let div = document.querySelector("div")
div.innerHTML = "this is our first web app"


