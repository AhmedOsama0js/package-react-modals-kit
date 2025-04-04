# React Modals Kit

[![npm version](https://img.shields.io/npm/v/react-modals-kit)](https://www.npmjs.com/package/react-modals-kit)
[![License](https://img.shields.io/npm/l/react-modals-kit)](https://opensource.org/licenses/MIT)

A powerful and customizable modal component library for React applications. This library provides multiple modal types, including general-purpose modals and confirmation modals, to enhance your user interface effortlessly.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [MainModal](#mainmodal)
  - [ConfirmationModal](#confirmationmodal)
- [Props](#props)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Main Modal**: A flexible modal for displaying content with customizable options.
- **Confirmation Modal**: A modal designed for confirmation actions like deletion or form submission.
- **Customizable Styling**: Easily adapt the appearance of modals to fit your design.
- **Overlay Click Handling**: Configurable option to close modals when clicking outside.
- **React Portal Support**: Leverages React's `createPortal` for rendering outside the component hierarchy.
- **Accessibility Enhancements**: Built-in focus management and keyboard navigation.
- **Lightweight**: Minimal footprint with no dependencies other than React.

## Installation

To install the package, run:

```bash
npm install react-modals-kit
```

Alternatively, using Yarn:

```bash
yarn add react-modals-kit
```

## Usage

### MainModal

The `MainModal` component is a versatile modal that can display messages, forms, or any other content within a modal interface.

```jsx
import React, { useState } from "react";
import { MainModal } from "react-modals-kit";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

      {isModalOpen && (
        <MainModal
          setModel={setIsModalOpen}
          content={<div>Your modal content goes here!</div>}
          closeOnOverlayClick={true}
          bodyColor="#fff"
        />
      )}
    </div>
  );
}

export default App;
```

### ConfirmationModal

The `ConfirmationModal` component is used to handle user confirmations, such as deletions or approvals.

```jsx
import React, { useState } from "react";
import { ConfirmationModal } from "react-modals-kit";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const confirmAction = () => {
    console.log("Action confirmed!");
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>
        Open Confirmation Modal
      </button>

      {isModalOpen && (
        <ConfirmationModal
          setModel={setIsModalOpen}
          onConfirm={confirmAction}
          message="Are you sure you want to proceed?"
          confirmText="Yes"
          cancelText="No"
          confirmBtnColor="#4CAF50"
          cancelBtnColor="#F44336"
          messageColor="#333"
        />
      )}
    </div>
  );
}

export default App;
```

## Props

### MainModal

| Prop                  | Type     | Default | Description                                     |
| --------------------- | -------- | ------- | ----------------------------------------------- |
| `setModel`            | `func`   | -       | Function to control modal visibility            |
| `content`             | `node`   | -       | Content displayed inside the modal              |
| `closeOnOverlayClick` | `bool`   | `true`  | Determines if clicking outside closes the modal |
| `bodyColor`           | `string` | `#fff`  | Background color of the modal body              |

### ConfirmationModal

| Prop              | Type     | Default   | Description                          |
| ----------------- | -------- | --------- | ------------------------------------ |
| `setModel`        | `func`   | -         | Function to control modal visibility |
| `onConfirm`       | `func`   | -         | Function triggered upon confirmation |
| `message`         | `string` | -         | Message displayed inside the modal   |
| `confirmText`     | `string` | `Yes`     | Label for the confirm button         |
| `cancelText`      | `string` | `No`      | Label for the cancel button          |
| `confirmBtnColor` | `string` | `#4CAF50` | Color of the confirm button          |
| `cancelBtnColor`  | `string` | `#F44336` | Color of the cancel button           |
| `messageColor`    | `string` | `#000`    | Text color of the message            |

## Customization

You can customize modal styles by modifying CSS in `MainModal.module.css` and `ConfirmationModal.module.css`. Alternatively, use inline styles via props like `bodyColor` and `messageColor`.

```css
/* Example: Customizing modal styles */
.container {
  background-color: #f4f4f4;
  border-radius: 8px;
  padding: 20px;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5);
}

.body {
  border-radius: 10px;
}
```

## Contributing

We welcome contributions! If you'd like to improve the library or introduce new features, feel free to fork the repository and submit a pull request.

### Contribution Steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to your branch (`git push origin feature-branch`)
5. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
