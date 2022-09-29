import React from "react";


function CategoryFilter({categories}) {
  const buttons = categories.map((category) =>{
    return (
      <button key={category} onClick ={handleClick}>{category}</button>
    )
  })

  function handleClick(e){
    const updatedButtons = buttons.filter((button) =>{

    })

  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
