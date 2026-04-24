# react-fadewriter

A lightweight React component that fades in text character by character.

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

| Prop        | Type     | Default | Description                              |
|-------------|----------|---------|------------------------------------------|
| `text`      | `string` | `''`    | The text to animate                      |
| `speed`     | `number` | `80`    | Delay between characters in milliseconds |
| `className` | `string` | `''`    | Optional CSS class for the wrapper       |

## Examples

```jsx
// Slow fade
<FadeWriter text="Slow and steady..." speed={120} />

// Fast fade
<FadeWriter text="Quick!" speed={30} />

// With custom class
<FadeWriter text="Styled text" className="my-heading" speed={60} />
```

## License

MIT
