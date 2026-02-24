import { useState } from "react";

function App(){

const [color,setColor]=useState("white");

return(
<div>

<button onClick={()=>setColor("red")}>Red</button>

<button onClick={()=>setColor("blue")}>Blue</button>

<div style={{background:"color",height :"100px"}}>

</div>

</div>
);
}

export default App;