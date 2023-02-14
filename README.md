# PopSave

Simple Vanilla component that displays a message to the user at the bottom right of the screen. See more in the documentation at [chiquezi.com/vanilla/pop-save](https://www.chiquezi.com/vanilla/pop-save)

### 🚀 Getting Started

```
// Install
yarn add @fabiochiquezi/pop-save or npm install @fabiochiquezi/pop-save

// Usage
import "@fabiochiquezi/pop-save/styles.css" // Import the CSS
import { usePopSave } from '@fabiochiquezi/pop-save'
```

### 📡 Example

```
import { usePopSave } from '@fabiochiquezi/pop-save'

const popSave = usePopSave()
popSave.open('Saving... Don‘t close!')
popSave.close()
```

## ✋ Author

- **Fábio Chiquezi** - [GitHub](https://github.com/fabiochiquezi) / [LinkedIn](https://www.linkedin.com/in/fabiochiquezi/)
