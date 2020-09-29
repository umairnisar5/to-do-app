import React, { useState } from 'react';



const App = () => {
    const [inutlist, setInputList] = useState("buy apple");
    const [ items, setItem] = useState([]);

    const itemEvent = (Event) => {
        setInputList(Event.target.value);
    };

    const listOfItem = () => {
        setItem((oldItem) => {
            return [...oldItem, inutlist];
        });
        setInputList("");
    };

return (
 
 
<>

<div className='main_div'>

<div className='center_div'>
<br/>
<h1> ToDo List</h1>
<br/>
<input type="text" placeholder="Add  a Item "
value={inutlist} onChange={itemEvent} />
<button onClick={listOfItem}  > + </button>

<ol>
    {/* <li> {inutlist} </li> */}
   { items.map ((itemval) => {
        return <li>{itemval} </li>;
    })}
    
</ol>
</div>
</div>
</>
);
};

export default App;