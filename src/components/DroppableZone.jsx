import Task from "./Task";

const DroppableZone = ({draggingOver, onDrop, index, getList, startDrag, tasks, setTasks}) =>{
    return(
        <div className='dd-zone' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, index))}>
        {getList(index).map(item => (
          <Task item={item} tasks={tasks} setTasks={setTasks} key={item.id} startDrag={startDrag}></Task>
        ))}
        </div>
    )

}

export default DroppableZone