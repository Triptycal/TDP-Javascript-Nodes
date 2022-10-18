import { useState } from 'react';
import AddItems from './AddItems';
import Basket from './Basket';
import RemoveItems from './RemoveItems';

const Store = () => {

   const [itemName, setItemName] = useState("");
   const [items, setItems] = useState([]);

    const newItem = ({ target }) => {
        setItemName(target.value)
    }

   const submitForm = (event) => {
       // Prevent form submission
        event.preventDefault();
   }

    const handleAdd = () => { 
        // Save item to array 
        setItems(items => [...items, itemName]);
    }

    const handleRemove = (index) => {
        const cloneItems = [...items];
        cloneItems.splice(index, 1);
        setItems(cloneItems);
    }

    return(
       <>
           <AddItems submitHandler={submitForm} 
            newItem={newItem} 
            handleAdd={handleAdd} />
            <RemoveItems submitHandler={submitForm} 
            handleRemove={handleRemove} />
            <Basket items={items}/> 
       </>
   )
}
export default Store;