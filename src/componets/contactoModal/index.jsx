import React from 'react';

const ContactosModal = ({ contacto, onClose }) => {
  return (
    <div className="modal br 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
      <h2>Informações do Contato</h2>
      <p>Nome: {contacto.name}</p>
      <p>Email: {contacto.email}</p>
      <p>Telefone: {contacto.telefone}</p>
      <p>Empresa: {contacto.empresa}</p>
      <button className='items-center w-full justify-between bg-slate-500 p-4 gap-3' onClick={onClose}>Fechar</button>
    </div>
  );
};

export default ContactosModal;

