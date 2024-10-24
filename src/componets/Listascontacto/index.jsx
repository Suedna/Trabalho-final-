import React, { useState } from 'react';
import ContactosModal from "../contactoModal/index";

const Listascontacto = ({ contactos, removeContacto, editarContacto }) => {
  const [selectedContactos, setSelectedContactos] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [editedName, setEditedName] = useState('');

  console.log('Rendering Listascontacto with contactos:', contactos);

  return (
    <div>
      {contactos.length === 0 ? (
        <p className='text-left bg-white'>No contact</p>
      ) : (
        contactos.map((contacto, index) => (
          <div key={index} className='flex items-center w-full justify-between bg-gray-200 p-4 gap-3' style={{border: "1px solid red"}}>
            <span>{contacto.name}</span>
            <button onClick={() => setSelectedContactos(contacto)}>Ver</button>

            <button className='items-center w-full justify-between bg-gray-200 p-4 gap-3' onClick={() => setEditIndex(index)}>Editar</button>
            {editIndex === index && (
              <div>
                <input 
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  placeholder="Novo Nome"
                />
                <button className='items-center w-full justify-between bg-gray-200 p-4 gap-3' onClick={() => {
                  editContacto({ ...contacto, name: editedName }, index);
                  setEditIndex(null);
                  setEditedName('');
                }}>Salvar</button>
              </div>
            )}
            
              

            <button className='items-center w-full justify-between bg-gray-200 p-4 gap-3' onClick={() => {
              console.log('Clicked Remover for contact at index:', index);
              removeContacto(index);
            }}>Remover</button>
          </div>
        ))
      )}

      {selectedContactos && (
        <ContactosModal
          contacto={selectedContactos}
          onClose={() => setSelectedContactos(null)}
        />
      )}
    </div>
  );
};

export default Listascontacto;
