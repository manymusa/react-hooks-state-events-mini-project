import React, { useState } from "react";
import Task from './Task'

function TaskList({ tasks }) {
  const [test,setTest] = useState(tasks.map(task => <Task
    key={task.text}
    text={task.text}
    category={task.category}
    handleClick={handleClick} />
  ))

  console.log(test)
  function handleClick(key) {
    let newList = test.filter((task) => {
      return task.key !== key
    })

    setTest(newList)
  }

  return (
    <div className="tasks">
      {test}
    </div>
  );
}

export default TaskList;
