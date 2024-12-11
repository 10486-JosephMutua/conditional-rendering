import React from "react";
export default function Joke(props) {
  /**
   * Challenge:
   * - Create state `isShown` (boolean, default to `false`)
   * - Add a button that toggles the value back and forth
   */
  
   const [change,setchange]=React.useState(false)

function submitHandle(){
setchange(prev => {

  return(
    !prev
  )
})

console.log(change)
}
  return (
      <div>
        
          {props.setup && <h3>{props.setup}</h3>}

         {/* if change has a truthy value then go ahead and display props.punch ese dont display it */}
      { change &&  <p>{props.punchline}</p>}
          <button onClick={submitHandle}>{change ? "hide punchline" : "show punchline"}</button>
          <hr />
      </div>
  )
}