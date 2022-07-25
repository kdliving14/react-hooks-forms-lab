import React from "react";
import { v4 as uuid } from "uuid";
import {useState} from "react"

function ItemForm({onItemFormSubmit}) 
{
  const [formData, setFormData]= useState({
    id:"",
    name:"",
    category:"Produce"
  })

  const handleOnChange=(e)=>{
    const{name, value} = e.target;

    setFormData(formData=> {
      return {
        ...formData, 
        id:uuid(),
        [name]:value
      }}
  )}

  const handleSubmit =(e)=>{
    e.preventDefault();
    onItemFormSubmit(formData)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={formData.name}
          onChange={handleOnChange}/>
      </label>

      <label>
        Category:
        <select 
        name="category" 
        value={formData.category}
        onChange={handleOnChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
