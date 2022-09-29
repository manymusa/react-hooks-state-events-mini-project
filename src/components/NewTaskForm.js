import React,{useState} from "react";

function NewTaskForm({categories}) {
  // const [details,setDetails] = useState('')
  
  // const options = categories.map((category) =>{
  //   if(category !== 'All'){
  //     return (
  //       <option>{category}</option>
  //     )
  //   }
  // })

  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {/* {options} */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
