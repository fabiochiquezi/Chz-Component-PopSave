<br />
<p align="center">
    <img src="https://www.chiquezi.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Flogo%2Flogo.c442afade084ba1adfa95e1aecfc83d0.svg&w=384&q=75" width="125">
</p>

# 🤙 PopSave

Simple VanillaUI Component to fire a message to the user that has a process being save.

## 🚀 Getting Started

```
import { usePopSave } from '@fabiochiquezi/pop-save'
const popSave = usePopSave()

<!-- Display -->
popSave.open(
  message?: string,
  delay?: number,
  spin?: { color: string, width: number, height: number }
)

<!-- Remove-->
popSave.close()

<!-- Customize -->
const options = {
  id?: string,
  className?: string,
  animationRemove?: string,
  animationAdd?: string,
  animationDuration?: number,
  backgroundColor?: string,
  color?: string
}

const popSave = usePopSave(options)
```

### 📡 Installing

Component:

```
yarn add @fabiochiquezi/pop-save

import { usePopSave } from '@fabiochiquezi/pop-save'
@import "@fabiochiquezi/pop-save/styles.css"
```

Project:

```
git clone https://github.com/fabiochiquezi/Chz-Component-PopSave.git
cd Chz-Component-PopSave
yarn install
yarn dev
```

## ✋ Author

- **Fábio Chiquezi** - [GitHub](https://github.com/fabiochiquezi) / [LinkedIn](https://www.linkedin.com/in/fabiochiquezi/)
