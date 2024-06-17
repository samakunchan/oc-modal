# oc-modal

> Modal pour le projet étudiant et projet final de OpenClassroom.

[![NPM](https://img.shields.io/npm/v/oc-modal.svg)](https://www.npmjs.com/package/oc-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save oc-modal
```

## Usage

```jsx
import { useState } from 'react';
import { OCModalComponent } from 'oc-modal';
import 'oc-modal/dist/index.css';

const EmployeeCreateFormComponent = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const message = 'This is my modal';
  const closeModal = () => setIsOpenModal(false);

  return <OCModalComponent
    message={message}
    isModalActive={isOpenModal}
    updateModal={closeModal}
  />;
}

export default EmployeeCreateFormComponent;
```

## License

MIT © [samakunchan](https://github.com/samakunchan)
