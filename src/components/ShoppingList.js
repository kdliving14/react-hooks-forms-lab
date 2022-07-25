import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const [itemList, setItemList]=useState(items)

  const [formData, setFormData]= useState({
    id:"",
    name:"",
    category:"Produce"
  })

  const onAddItem=(newItem)=>{
    setItemList(itemList=>{
      return [...itemList, newItem]
    })
  }

  //(Category) get value from form and set state to value
  const handleCategoryChange=(e)=>{setSelectedCategory(e.target.value)}
  //(Search) get value from form and set state to value
  const handleSearch=(e)=>{setSearchQuery(e.target.value)}

  //Category filter
  const itemsToDisplay = itemList.filter((item) => 
  {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  //after category filter, search for text matches (lowercase very important!)
  const searchResults = itemsToDisplay.filter(item =>{
    return item.name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  return (<div className="ShoppingList">
      <ItemForm onItemFormSubmit={onAddItem} setFormData={setFormData} formData={formData} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange ={handleSearch} search={searchQuery} />
      <ul className="Items">
        {searchResults.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
