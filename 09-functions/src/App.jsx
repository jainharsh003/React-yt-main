// import React from 'react'

// const App = () => {

  
  
//   return (
//     <div>
//       <h1>Hello, Harsh</h1>
//       {/* <button onClick={function(){
//         console.log("Hello Guys!")
//       }}>Change User</button> */}
//       <button onClick={()=>{
//         console.log("Hello Guys!")
//       }}>Change User</button>
//       <input onChange={(e)=>{
//         console.log("User is Typing....",e.target.value)
//       }}type="text" placeholder='Enter Your name' />
//     </div>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <div onMouseMove={(e)=>{
//         console.log("Mouse Moving",e.clientX)
//       }}className="box"></div>
//     </div>
//   )
// }

// export default App



import React from 'react'

const App = () => {

  const pageScrolling=(elem)=>{
    if(elem>0){
      console.log("Seedha Scrolling....");
      
    }
    else{
      console.log('Ulta Scrolling...');
    }
  }
  return (
    <div onWheel={pageScrolling}>

      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App