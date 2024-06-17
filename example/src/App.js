import React, { useState } from 'react';

import { OCModalComponent } from '@samakunchan/oc-modal';
import '@samakunchan/oc-modal/dist/index.css';

const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const message = 'This is my modal';
  const closeModal = () => setIsOpenModal(false);

  return (
    <OCModalComponent message={message} isModalActive={isOpenModal} updateModal={closeModal} />
  );
};

export default App;
