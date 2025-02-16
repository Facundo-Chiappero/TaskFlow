const Task = ({item, startDrag, tasks, setTasks}) =>{
  const handleCancel= ()=>{

    const newTasks = tasks.filter(thisItem => thisItem.id !== item.id);
    setTasks(newTasks)
  } 
  return(
    <div className='dd-element' draggable onDragStart={(evt) => startDrag(evt, item)}>
    <div className="cancel" onClick={handleCancel}>X</div>
    
    <strong className='title'>{item.title}</strong>
    <p className='body'>{item.body}</p>
    </div>
  )
}

export default Task