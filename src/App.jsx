import { useState, useEffect } from "react";
import Modal from "./components/Modal";
import DroppableZone from "./components/DroppableZone";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedList, setSelectedList] = useState(1);

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [
      { id: 1, title: 'Tarea 1', body: 'Esta es una tarea de demostracion', list: 1 },
      { id: 2, title: 'Tarea 2', body: 'Aqui pudes poner las tareas pendientes', list: 1 },
      { id: 3, title: 'Tarea 3', body: 'info 3', list: 3 },
      { id: 4, title: 'Tarea 4', body: 'Puedes borrar estas tareas cuando quieras', list: 2 },
      { id: 5, title: 'Tarea 5', body: 'info 5', list: 2 },
    ];
  });

  
  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const getList = (list) => {
    return tasks.filter(item => item.list === list);
  };
  
  const startDrag = (evt, item) => {
    evt.dataTransfer.setData('itemID', item.id);
  };
  
  const draggingOver = (evt) => {
    evt.preventDefault();
  };
  
  const onDrop = (evt, list) => {
    const itemID = evt.dataTransfer.getData('itemID');
    const item = tasks.find(item => item.id == itemID);
    item.list = list;
    
    const newState = tasks.map(task => {
      if (task.id === itemID) return item;
      return task;
    });
    
    setTasks(newState);
  };
  
  const handleClick = (index) => {
    setSelectedList(index);
    setShowModal(true);
  };
  
  return (
    <>
    <div className={'drag-and-drop'}>
    <div className="column column--1">
    <h3>Tareas por hacer</h3>
    <DroppableZone startDrag={startDrag} getList={getList} draggingOver={draggingOver} onDrop={onDrop} index={1} tasks={tasks} setTasks={setTasks}/>
    <button className="add" onClick={() => handleClick(1)}>Agregar tarea</button>
    </div>
    
    <div className="column column--2">
    <h3>Tareas en progreso</h3>
    <DroppableZone startDrag={startDrag} getList={getList} draggingOver={draggingOver} onDrop={onDrop} index={2} tasks={tasks} setTasks={setTasks}/>
    <button className="add" onClick={() => handleClick(2)}>Agregar tarea</button>
    </div>
    
    <div className="column column--3">
    <h3>Tareas realizadas</h3>
    <DroppableZone startDrag={startDrag} getList={getList} draggingOver={draggingOver} onDrop={onDrop} index={3} tasks={tasks} setTasks={setTasks}/>
    <button className="add" onClick={() => handleClick(3)}>Agregar tarea</button>
    </div>
    </div>
    
    {showModal && <Modal 
      lista={selectedList}
      setShowModal={setShowModal}
      tasks={tasks}
      setTasks={setTasks}
      />}
      </>
    );
  };
  
  export default App;
