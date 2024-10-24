import React, { useState } from 'react';

const Contacto = ({ addContacto }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [empresa, setEmpresa] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addContacto({ name, email, telefone, empresa });
    setName('');
    setEmail('');
    setTelefone('');
    setEmpresa('');
  };

  return (
    <section class="bg-white dark:bg-gray-900 rounded-lg">
      <div class="py-8 px-4 max-w-2xl lg:py-16">      
        <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Adicionar um novo contacto</h2>
        <form className='form-container' onSubmit={handleSubmit}>
          <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>

              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome"
                required
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
              />
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>

              <input
                type="email"
                value={email}
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
              />
            </div>

            <div>
              <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>

              <input
                type="tel"
                value={telefone}
                name='phone'
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="Telefone"
                required
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
              />
            </div>
            <div>
              <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>

              <input
                type="text"
                value={empresa}
                name='company'
                onChange={(e) => setEmpresa(e.target.value)}
                placeholder="Empresa"
                required
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'

              />

            </div>
            <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
              Adicionar Contato
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default Contacto;

