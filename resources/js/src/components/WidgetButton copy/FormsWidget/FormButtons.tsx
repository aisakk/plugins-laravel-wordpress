import React from 'react';

function FormButtons({ createButton, deleteButton, dataButton }) {
  return (
    <>
      <form onSubmit={createButton} className="flex justify-between" >
        <div className="flex flex-col">
          <label htmlFor="">Buttons</label>
          <span>Select the area you want to modify</span>
        </div>
        <button type="submit">Add New</button>
      </form>
      <div>
        {dataButton.map((boton) => (
          <div key={boton.id}>
            {boton.nombre}{' '}
            <button onClick={() => deleteButton(boton.id)}>Eliminar {boton.nombre}</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default FormButtons;
