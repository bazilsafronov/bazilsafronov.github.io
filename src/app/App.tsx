import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line import/no-unresolved
import UserModal from '@/features/user/components/UserModal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="App">
      Hello Ubuntu
      <button onClick={handleOpenModal}>Open Modal</button>
      <UserModal isOpen={modalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
