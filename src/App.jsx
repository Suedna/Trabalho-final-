import { useState, useEffect } from 'react';
import Contacto from "./componets/contacto/index";
import Listascontacto from "./componets/Listascontacto/index";
import ContactosModal from "./componets/contactoModal/index";

function App() {
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    const savedContactos = JSON.parse(localStorage.getItem('contactos'));
    if (savedContactos) {
      setContactos(savedContactos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contactos', JSON.stringify(contactos));
  }, [contactos]);


  const addContacto = (contacto) => {
    setContactos([...contactos, contacto]);
  };

  const removeContacto = (index) => {
    console.log('Removing contact at index:', index);
    const newContactos = [...contactos];
    if (index >= 0 && index < newContactos.length) {
      newContactos.splice(index, 1);
      setContactos(newContactos);
      console.log('New contact list:', newContactos);
    } else {
      console.error('Index out of bounds');
    }
  };

  const editContacto = (updatedContacto, index) => {
    const newContactos = contactos.map((contacto, idx) =>
      idx === index ? updatedContacto : contacto
    );
    setContactos(newContactos);
  };

  return (
    <div className='flex items-center justify-center h-screen  w-full gap-3 bg-white dark:bg-gray-700'>
      <div className=' py-8 px-4  max-w-2xl lg:py-16 items-center flex'>
        <Contacto addContacto={addContacto} />
      </div>

      <div className='flex gap-4'>
        <Listascontacto 
          contactos={contactos}
          removeContacto={removeContacto}
          editContacto={editContacto}
        />
      </div>
    </div>
  );
}

export default App;

