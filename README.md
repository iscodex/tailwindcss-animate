# @iscodex/tailwindcss-animate

Extended animation utilities for Tailwind CSS v4. Modern, lightweight, and fully customizable animations built with CSS custom properties.

## Features

- **Tailwind CSS v4 Native** - Built with `@utility` and `@theme` syntax
- **Zero Configuration** - Just import and start animating
- **Fully Customizable** - Control duration, delay, timing, and more
- **CSS Custom Properties** - Easy theming and dynamic control
- **Modular Architecture** - Import only what you need
- **TypeScript Support** - Complete type definitions included

## Installation

```bash
npm install @iscodex/tailwindcss-animate
```

## Quick Start

Add the import to your CSS file:

```css
@import "tailwindcss";
@import "@iscodex/tailwindcss-animate";
```

Start using animations:

```html
<div class="animate-wiggle">Hello World!</div>

<button class="animate-bounce animate-infinite animate-duration-[2s]">
  Click me
</button>
```

## Requirements

- **Tailwind CSS v4.0.0** or higher
- Modern browser with CSS custom properties support

## Available Animations

### Attention Seekers

- `animate-flash` - Flashing effect
- `animate-head-shake` - Head shake movement
- `animate-heart-beat` - Heart beating effect
- `animate-jello` - Jello wobble effect
- `animate-rubber-band` - Rubber band stretch
- `animate-shake-x` - Horizontal shake
- `animate-shake-y` - Vertical shake
- `animate-swing` - Pendulum swing
- `animate-tada` - Celebration effect
- `animate-wiggle` - Gentle rotation wiggle
- `animate-wobble` - Side-to-side wobble

### Dashing Animations

- `animate-dash-in-left` - Fast slide in from left
- `animate-dash-in-right` - Fast slide in from right
- `animate-dash-out-left` - Fast slide out to left
- `animate-dash-out-right` - Fast slide out to right

### Bouncing Effects

- `animate-bounce-in` - Bounce entrance
- `animate-bounce-in-down` - Bounce in from top
- `animate-bounce-in-up` - Bounce in from bottom
- `animate-bounce-out` - Bounce exit

### Rotating Effects

- `animate-rotate-in` - Rotating entrance
- `animate-rotate-out` - Rotating exit

### Special Effects

- `animate-hinge` - Door hinge effect
- `animate-jack-in` - Pop-up like jack-in-the-box
- `animate-jack-out` - Reverse jack-in effect

_And many more..._

## Control Utilities

### Duration

```html
<div class="animate-wiggle animate-duration-[500ms]">Fast wiggle</div>
<div class="animate-bounce animate-duration-[2s]">Slow bounce</div>
```

### Delay

```html
<div class="animate-fade-in animate-delay-[1s]">Delayed entrance</div>
```

### Iteration Count

```html
<div class="animate-pulse animate-infinite">Never stops</div>
<div class="animate-bounce animate-twice">Bounce twice</div>
```

### Direction

```html
<div class="animate-spin animate-reverse">Reverse spin</div>
<div class="animate-wiggle animate-alternate animate-infinite">
  Back and forth
</div>
```

### Fill Mode

```html
<div class="animate-fade-in animate-fill-both">Maintains final state</div>
```

### Timing Functions

```html
<div class="animate-bounce animate-ease-in-out">Smooth bounce</div>
```

### Composition

```html
<div class="animate-bounce animate-wiggle animate-add">Combined animations</div>
```

## CSS Custom Properties

Customize animations globally using CSS custom properties:

```css
:root {
  --default-animation-duration: 0.5s;
  --default-animation-delay: 0s;
  --default-animation-timing-function: ease-in-out;
}

/* Theme-specific customization */
.dark {
  --default-animation-duration: 0.8s;
}
```

## Advanced Usage

### Hover Animations

```html
<button class="hover:animate-wiggle transition-all">Hover to wiggle</button>
```

### Responsive Animations

```html
<div class="animate-bounce md:animate-fade-in lg:animate-none">
  Responsive animation
</div>
```

### Custom Duration with Arbitrary Values

```html
<div class="animate-spin animate-duration-[3.5s]">Custom timing</div>
```

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT License - see [LICENSE](LICENSE.md) file for details.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history.

## Links

- [Documentation](https://tailwindcss-animate-docs.com) _(coming soon)_
- [Animation Configurator](https://tailwindcss-animate.com/configurator) _(coming soon)_
- [GitHub Repository](https://github.com/iscodex/tailwindcss-animate)
- [npm Package](https://www.npmjs.com/package/@iscodex/tailwindcss-animate)

---

Made with ❤️ by [@iscodex](https://github.com/iscodex)
