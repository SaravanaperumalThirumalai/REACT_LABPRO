import { useState } from "react";

function App(){

const [task,setTask]=useState("");
const [list,setList]=useState([]);

return(
<div>

<input onChange={(e)=>setTask(e.target.value)} />

<button onClick={()=>setList([...list,task])}>
Add
</button>

{list.map((t)=>(
<p>{t}</p>
))}

</div>
);
}

export default App;