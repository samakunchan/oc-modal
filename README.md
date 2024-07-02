# oc-modal

> Simple modal for the final project OpenClassroom.

[![NPM](https://img.shields.io/badge/npm-v1.0.3-blue)](https://www.npmjs.com/package/@samakunchan/oc-modal)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @samakunchan/oc-modal
```

```bash
yarn add --save @samakunchan/oc-modal
```

## Usage

```jsx
import { useState } from 'react';
import { OCModalComponent } from '@samakunchan/oc-modal';
import '@samakunchan/oc-modal/dist/index.css';

const MyComponent = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const message = 'This is my modal';
  const closeModal = () => setIsOpenModal(false);

  return (
    <div>
      <button onClick={() => setIsOpenModal(true)}>Open my modal</button>
      <OCModalComponent
        message={message}
        isModalActive={isOpenModal}
        closeModal={closeModal}
      />
    </div>
  );
}

export default MyComponent;
```

## License

MIT © [samakunchan](https://github.com/samakunchan)
