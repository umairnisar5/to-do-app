import React, { useState } from 'react';
import ToDoList from './ToDoList';



const App = () => {
    const [inutlist, setInputList] = useState("");
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
    const  deleteItems  = (id) => {
        setItem((oldItem) => {
          return oldItem.filter((arrElem, index) => {
                return index !== id;
          })
      })
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
   { items.map ((itemval, index) => {
      return  <ToDoList
            text= {itemval} kay={index} id={index}
            onSelect={deleteItems}
        />
    })}
    
</ol>
</div>
</div>
</>
);
};

export default App;