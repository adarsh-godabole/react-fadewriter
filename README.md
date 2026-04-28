# react-fadewriter

A lightweight React component that fades in text character by character or word by word.

## Installation

```bash
npm install react-fadewriter
```

## Usage

```jsx
import { FadeWriter } from 'react-fadewriter'

function App() {
  return <FadeWriter text="Hello, World!" speed={60} />
}
```

No CSS import needed — styles are injected automatically.

## Props

| Prop         | Type       | Default  | Description                                      |
|--------------|------------|----------|--------------------------------------------------|
| `text`       | `string`   | `''`     | The text to animate                              |
| `speed`      | `number`   | `80`     | Delay between characters/words in milliseconds   |
| `mode`       | `string`   | `'char'` | `'char'` for character-by-character, `'word'` for word-by-word |
| `onComplete` | `function` | —        | Callback fired when the animation finishes       |
| `className`  | `string`   | `''`     | Optional CSS class for the wrapper               |

## Examples

```jsx
// Character by character (default)
<FadeWriter text="Hello, World!" speed={60} />

// Word by word
<FadeWriter text="One word at a time" mode="word" speed={200} />

// Run a callback when done
<FadeWriter
  text="Loading complete!"
  speed={60}
  onComplete={() => console.log('done!')}
/>

// With custom class
<FadeWriter text="Styled text" className="my-heading" speed={60} />
```

## License

MIT
