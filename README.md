# React modal component

## Requirements

- Node.js v16.19.1 or latest
- react v18.2.0 or latest
- react-dom v18.2.0 or latest
- [IntelliJ IDEA](https://www.jetbrains.com/idea/) or [VScode](https://code.visualstudio.com/) are recommended

## Installation

[Link to package](https://www.npmjs.com/package/@cynthiaaa_crn/success-modal/v/0.1.2?activeTab=readme)

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):
```
$ npm install --save @cynthiaaa_crn/success-modal
$ yarn add @cynthiaaa_crn/success-modal
```

## References

- `open`: (boolean) weather the modal is shown or not
- `setOpen`: (function) the method handling the change of the open value
- `containerStyle`: (object) style of the modal container

## Examples

Here is a simple example of react-modal being used in an app with some custom
styles:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { SuccessModal } from "@cynthiaaa_crn/success-modal";

function App() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      
      <SuccessModal
        isOpen={modalIsOpen}
        setOpen={setIsOpen}
        containerStyle={{
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <h2>Hello</h2>
        <button onClick={() => setIsOpen(false)}>close</button>
        <div>I am a modal</div>
      </SuccessModal>
    </div>
  );
}

ReactDOM.render(<App />, appElement);
```