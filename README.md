# @iscodex/tailwindcss-animate

Extended animation utilities for Tailwind CSS v4. Modern, lightweight, and fully customizable animations built with CSS custom properties.

## Features

- **Tailwind CSS v4** - Built with `@utility` and `@theme` syntax
- **Zero Configuration** - Just import and start animating
- **Fully Customizable** - Control duration, delay, timing, and more
- **CSS Custom Properties** - Easy theming and dynamic control
- **Modular Architecture** - Import only what you need

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
- `animate-jelly` - Jello wobble effect
- `animate-rubber-band` - Rubber band stretch
- `animate-shake-x` - Horizontal shake
- `animate-shake-y` - Vertical shake
- `animate-swing` - Pendulum swing
- `animate-tada` - Celebration effect
- `animate-wiggle` - Gentle rotation wiggle
- `animate-wobble` - Side-to-side wobble
- `animate-float` - Floating effect
- `animate-spin` - Continuous rotation
- `animate-ping` - Ping radar effect
- `animate-pulse` - Pulse opacity
- `animate-bounce` - Bouncing effect

### Back Entrances

- `animate-back-in-down` - Back entrance from top
- `animate-back-in-start` - Back entrance from left
- `animate-back-in-end` - Back entrance from right
- `animate-back-in-up` - Back entrance from bottom

### Back Exits

- `animate-back-out-down` - Back exit to bottom
- `animate-back-out-start` - Back exit to left
- `animate-back-out-end` - Back exit to right
- `animate-back-out-up` - Back exit to top

### Bouncing Entrances

- `animate-bounce-in` - Bounce entrance
- `animate-bounce-in-down` - Bounce in from top
- `animate-bounce-in-start` - Bounce in from left
- `animate-bounce-in-end` - Bounce in from right
- `animate-bounce-in-up` - Bounce in from bottom

### Bouncing Exits

- `animate-bounce-out` - Bounce exit
- `animate-bounce-out-down` - Bounce out to bottom
- `animate-bounce-out-start` - Bounce out to left
- `animate-bounce-out-end` - Bounce out to right
- `animate-bounce-out-up` - Bounce out to top

### Dashing

- `animate-dash-in-start` - Fast slide in from left
- `animate-dash-in-end` - Fast slide in from right
- `animate-dash-out-start` - Fast slide out to left
- `animate-dash-out-end` - Fast slide out to right

### Fading Entrances

- `animate-fade-in` - Fade entrance
- `animate-fade-in-down` - Fade in from top
- `animate-fade-in-start` - Fade in from left
- `animate-fade-in-end` - Fade in from right
- `animate-fade-in-up` - Fade in from bottom

### Fading Exits

- `animate-fade-out` - Fade exit
- `animate-fade-out-down` - Fade out to bottom
- `animate-fade-out-start` - Fade out to left
- `animate-fade-out-end` - Fade out to right
- `animate-fade-out-up` - Fade out to top

### Flippers

- `animate-flip` - 3D flip effect
- `animate-flip-in-x` - Flip in on X-axis
- `animate-flip-in-y` - Flip in on Y-axis
- `animate-flip-out-x` - Flip out on X-axis
- `animate-flip-out-y` - Flip out on Y-axis

### Rotating Entrances

- `animate-rotate-in` - Rotating entrance
- `animate-rotate-in-down-start` - Rotate in from top-left
- `animate-rotate-in-down-end` - Rotate in from top-right
- `animate-rotate-in-up-start` - Rotate in from bottom-left
- `animate-rotate-in-up-end` - Rotate in from bottom-right

### Rotating Exits

- `animate-rotate-out` - Rotating exit
- `animate-rotate-out-down-start` - Rotate out to bottom-left
- `animate-rotate-out-down-end` - Rotate out to bottom-right
- `animate-rotate-out-up-start` - Rotate out to top-left
- `animate-rotate-out-up-end` - Rotate out to top-right

### Sliding Entrances

- `animate-slide-in-down` - Slide in from top
- `animate-slide-in-up` - Slide in from bottom
- `animate-slide-in-start` - Slide in from left
- `animate-slide-in-end` - Slide in from right

### Sliding Exits

- `animate-slide-out-down` - Slide out to bottom
- `animate-slide-out-up` - Slide out to top
- `animate-slide-out-start` - Slide out to left
- `animate-slide-out-end` - Slide out to right

### Specials

- `animate-hinge` - Door hinge effect
- `animate-jack-in` - Pop-up like jack-in-the-box
- `animate-jack-out` - Reverse jack-in effect
- `animate-roll-in` - Rolling entrance
- `animate-roll-out` - Rolling exit
- `animate-particle` - Particle effect

### Zooming Entrances

- `animate-zoom-in` - Zoom entrance
- `animate-zoom-in-down` - Zoom in from top
- `animate-zoom-in-up` - Zoom in from bottom
- `animate-zoom-in-start` - Zoom in from left
- `animate-zoom-in-end` - Zoom in from right

### Zooming Exits

- `animate-zoom-out` - Zoom exit
- `animate-zoom-out-down` - Zoom out to bottom
- `animate-zoom-out-up` - Zoom out to top
- `animate-zoom-out-start` - Zoom out to left
- `animate-zoom-out-end` - Zoom out to right

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
<button class="hover:animate-wiggle hover:animate-infinite">
  Hover to wiggle
</button>
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

## License

MIT License - see [LICENSE](LICENSE.md) file for details.

## Changelog

See [CHANGELOG](CHANGELOG.md) for version history.

## Links

- [Documentation](https://tailwindcss-animate-docs.com) _(coming soon)_
- [Animation Configurator](https://tailwindcss-animate.com/configurator) _(coming soon)_
- [GitHub Repository](https://github.com/iscodex/tailwindcss-animate)
- [npm Package](https://www.npmjs.com/package/@iscodex/tailwindcss-animate)

---

Made with ❤️ by [@alckordev](https://github.com/alckordev)
