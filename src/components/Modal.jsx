import { useState } from "react";

const Modal = ({ lista, setShowModal, tasks, setTasks }) => {
  const [titulo, setTitulo] = useState("");
  const [tarea, setTarea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = Date.now(); 

    const newTask = {
      id: newId,
      title: titulo,
      body: tarea,
      list: lista
    };

    setTasks([...tasks, newTask]);

    setShowModal(false);

    setTitulo("");
    setTarea("");
  };

  const handleCancel = () => {
    setShowModal(false)
  }

  return (
    <div className="modal-overlay">
    <div className="modal">
      <div className="cancel" onClick={handleCancel}>X</div>
      <form onSubmit={handleSubmit} action={'POST'}>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
          placeholder="Título"
          autoFocus
        />
        <input
          type="text"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
          required
          placeholder="Tarea"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
    </div>
  );
};

export default Modal;
