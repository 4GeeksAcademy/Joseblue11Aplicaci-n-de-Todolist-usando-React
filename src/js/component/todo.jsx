import React, { useState } from 'react';

//create your first component
const ToDoList = () => {

    const [task, setTaskValue] = useState("");
    const [taskList, setTaskListValue] = useState([]);

    const handleKeyDown = event => {
        if (event.key === 'Enter' && !task == "" && !task.length <= 40) {
            setTaskListValue(current => [...current, task]);
            setTaskValue("")
        }
      };

    const removeTask = (index) => {
        setTaskListValue(current =>[
        ...current.slice(0, index),
        ...current.slice(index + 1, current.length)
        ]);
    }

	return (
            <div className="container d-flex justify-content-center flex-column">
                <h1>todo</h1>
                <div className="input-group input-group-lg w-50">
                    <label className="input-group-text rounded-0" htmlFor="inputTask"><i className="fas fa-tasks"></i></label>
                    <input type="text" id="inputTask" className="form-control rounded-0" placeholder="What needs to be done?" name="inputTask" maxLength={"40"} value={task} onChange={(e) => setTaskValue(e.target.value)} onKeyDown={handleKeyDown} aria-label="inputTask" aria-describedby="basic-addon1"/>
                </div>
                    <ul className="list-group">
                        {taskList.map((element, index) => {
                            return (
                                <li key={index} className="list-group-item rounded-0 border w-50 d-flex justify-content-between align-items-center task-none">
                                    {element}
                                    <button type='button' onClick={() => removeTask(index)} className='btn btn-danger'>X</button>
                                </li>
                            );
                        })}
                        <li className="list-group-item rounded-0 border w-50 text-muted"><small>{taskList.length} {taskList.length == 1 ? "item" : "items" } left</small></li>
                    </ul>
            </div>
	);
};

export default ToDoList;
