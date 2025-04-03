بالطبع! فيما يلي نموذج **ملف README** يحتوي على شرح شامل لجميع إمكانيات وخصائص مكتبتك، مع بعض التفاصيل التي تجعل المشروع يبدو احترافيًا. يمكنك تعديل هذا الملف حسب الحاجة وإرفاقه في مستودع GitHub الخاص بك.

### **ملف README.md**

````markdown
# React Modals Kit

[![npm version](https://img.shields.io/npm/v/react-modals-kit)](https://www.npmjs.com/package/react-modals-kit)
[![License](https://img.shields.io/npm/l/react-modals-kit)](https://opensource.org/licenses/MIT)

A comprehensive and customizable modal component library for React applications. This library offers multiple modal types, including main modals and confirmation modals, to enhance your user interface with ease.

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

- **Main Modal**: A versatile modal for displaying content with customizable options.
- **Confirmation Modal**: A modal designed for confirmation actions like delete or submit.
- **Customizable Styles**: Easily customize the appearance of modals.
- **Overlay Click Handling**: Option to close modals when clicking on the overlay.
- **React Portal Support**: Seamlessly integrates with React's `createPortal` for rendering outside the DOM hierarchy.
- **Accessibility Features**: Focus management and keyboard navigation support.
- **Lightweight**: Small and performant with no external dependencies (other than React).

## Installation

To install this package, run the following command:

```bash
npm install react-modals-kit
```
````

Alternatively, you can install it using Yarn:

```bash
yarn add react-modals-kit
```

## Usage

### MainModal

`MainModal` is the base modal component that you can use for various purposes like displaying messages, forms, or other content in a modal.

```jsx
import React, { useState } from "react";
import { MainModal } from "react-modals-kit";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      {isModalOpen && (
        <MainModal
          setModel={setIsModalOpen}
          content={<div>Here is your modal content!</div>}
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

`ConfirmationModal` is a specialized modal for handling confirmation actions (e.g., delete, submit, etc.).

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
          message="Are you sure you want to delete this item?"
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

| Prop                  | Type     | Default | Description                                                      |
| --------------------- | -------- | ------- | ---------------------------------------------------------------- |
| `setModel`            | `func`   | -       | Function to close the modal                                      |
| `content`             | `node`   | -       | Content to display inside the modal                              |
| `closeOnOverlayClick` | `bool`   | `true`  | Determines if the modal should close when the overlay is clicked |
| `bodyColor`           | `string` | `#fff`  | Background color of the modal body                               |

### ConfirmationModal

| Prop              | Type     | Default   | Description                                   |
| ----------------- | -------- | --------- | --------------------------------------------- |
| `setModel`        | `func`   | -         | Function to close the modal                   |
| `onConfirm`       | `func`   | -         | Function to execute when confirmation is made |
| `message`         | `string` | -         | The message to display in the modal           |
| `confirmText`     | `string` | `Yes`     | Text for the confirm button                   |
| `cancelText`      | `string` | `No`      | Text for the cancel button                    |
| `confirmBtnColor` | `string` | `#4CAF50` | Color of the confirm button                   |
| `cancelBtnColor`  | `string` | `#F44336` | Color of the cancel button                    |
| `messageColor`    | `string` | `#000`    | Color of the message text                     |

## Customization

You can easily customize the styles of the modals by overriding the default CSS in the `MainModal.module.css` and `ConfirmationModal.module.css` files. You can also pass inline styles using the `bodyColor` and `messageColor` props.

```css
/* Example of customizing the modal body */
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

We welcome contributions to this project! If you would like to improve the code or add new features, please feel free to fork the repository and submit a pull request.

### Steps to contribute:

1. Fork this repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a new pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

````

### شرح الملف:

1. **الشعار والأوسمة**: يظهر إصدار الحزمة والترخيص باستخدام دروع (badges) التي تضيف طابعًا احترافيًا.
2. **الميزات**: شرح الوظائف الرئيسية للمكتبة مثل `MainModal` و `ConfirmationModal`، مما يساعد المستخدمين على فهم ما يمكنهم استخدامه.
3. **التثبيت**: طريقة تثبيت المكتبة عبر `npm` أو `yarn` مع التعليمات اللازمة.
4. **الاستخدام**: أمثلة عملية على كيفية استخدام كلا من `MainModal` و `ConfirmationModal` في التطبيقات.
5. **الخصائص (Props)**: جدول يحتوي على الخصائص المتاحة لكل مكون مع شرح لكل منها.
6. **التخصيص**: كيفية تخصيص المودال باستخدام CSS أو خصائص inline.
7. **المساهمة**: تعليمات للمطورين الذين يرغبون في المساهمة في المشروع.
8. **الترخيص**: تعريف الترخيص الخاص بالمشروع وهو MIT.

### رفع المشروع على GitHub:
1. **إنشاء مستودع جديد على GitHub**.
2. **إضافة المشروع إلى المستودع** عبر الأمر التالي:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <URL_of_your_GitHub_repository>
   git push -u origin master
````

3. **إرفاق رابط المستودع في ملف README** مع توجيه المستخدمين إلى مستودعك على GitHub.

بعد إضافة هذا الملف إلى مشروعك ورفعه على GitHub، ستصبح المكتبة جاهزة للاستخدام من قبل الآخرين وتبدو بشكل احترافي.
