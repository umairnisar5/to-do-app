import React, { useState } from 'react';



const App = () => {
    const [inutlist, setInputList] = useState("buy apple");

    const itemEvent = (Event) => {
        setInputList(Event.target.value);
    };

return (
 
 
<>

<div className='main_div'>

<div className='center_div'>
<br/>
<h1> ToDo List</h1>
<br/>
<input type="text" placeholder="Add  a Item " onChange={itemEvent} />
<button  > + </button>

<ol>
    <li> {inutlist} </li>
</ol>
</div>
</div>
</>
);
};

export default App;