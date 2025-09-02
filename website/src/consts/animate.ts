import type { AnimateGroup } from "../types/animate";

export const animates: AnimateGroup[] = [
  {
    name: "Attention seekers",
    children: [
      { name: "bounce", class: "animate-bounce" },
      { name: "flash", class: "animate-flash" },
      { name: "pulse", class: "animate-pulse" },
      { name: "head-shake", class: "animate-head-shake" },
      { name: "heart-beat", class: "animate-heart-beat" },
      { name: "jelly", class: "animate-jelly" },
      { name: "rubber-band", class: "animate-rubber-band" },
      { name: "shake-x", class: "animate-shake-x" },
      { name: "shake-y", class: "animate-shake-y" },
      { name: "swing", class: "animate-swing" },
      { name: "tada", class: "animate-tada" },
      { name: "wiggle", class: "animate-wiggle" },
      { name: "wobble", class: "animate-wobble" },
      { name: "float", class: "animate-float" },
      { name: "spin", class: "animate-spin" },
      { name: "ping", class: "animate-ping" },
    ],
  },
  {
    name: "Back entrances",
    children: [
      { name: "back-in-down", class: "animate-back-in-down" },
      { name: "back-in-start", class: "animate-back-in-start" },
      { name: "back-in-end", class: "animate-back-in-end" },
      { name: "back-in-up", class: "animate-back-in-up" },
    ],
  },
  {
    name: "Back exits",
    children: [
      { name: "back-out-down", class: "animate-back-out-down" },
      { name: "back-out-start", class: "animate-back-out-start" },
      { name: "back-out-end", class: "animate-back-out-end" },
      { name: "back-out-up", class: "animate-back-out-up" },
    ],
  },
  {
    name: "Bouncing entrances",
    children: [
      { name: "bounce-in", class: "animate-bounce-in" },
      { name: "bounce-in-down", class: "animate-bounce-in-down" },
      { name: "bounce-in-start", class: "animate-bounce-in-start" },
      { name: "bounce-in-end", class: "animate-bounce-in-end" },
      { name: "bounce-in-up", class: "animate-bounce-in-up" },
    ],
  },
  {
    name: "Bouncing exits",
    children: [
      { name: "bounce-out", class: "animate-bounce-out" },
      { name: "bounce-out-down", class: "animate-bounce-out-down" },
      { name: "bounce-out-start", class: "animate-bounce-out-start" },
      { name: "bounce-out-end", class: "animate-bounce-out-end" },
      { name: "bounce-out-up", class: "animate-bounce-out-up" },
    ],
  },
  {
    name: "Dashing",
    children: [
      { name: "dash-in-start", class: "animate-dash-in-start" },
      { name: "dash-in-end", class: "animate-dash-in-end" },
      { name: "dash-out-start", class: "animate-dash-out-start" },
      { name: "dash-out-end", class: "animate-dash-out-end" },
    ],
  },
  {
    name: "Fading entrances",
    children: [
      { name: "fade-in", class: "animate-fade-in" },
      { name: "fade-in-down", class: "animate-fade-in-down" },
      { name: "fade-in-start", class: "animate-fade-in-start" },
      { name: "fade-in-end", class: "animate-fade-in-end" },
      { name: "fade-in-up", class: "animate-fade-in-up" },
    ],
  },
  {
    name: "Fading exits",
    children: [
      { name: "fade-out", class: "animate-fade-out" },
      { name: "fade-out-down", class: "animate-fade-out-down" },
      { name: "fade-out-start", class: "animate-fade-out-start" },
      { name: "fade-out-end", class: "animate-fade-out-end" },
      { name: "fade-out-up", class: "animate-fade-out-up" },
    ],
  },
  {
    name: "Flippers",
    children: [
      { name: "flip", class: "animate-flip" },
      { name: "flip-in-x", class: "animate-flip-in-x" },
      { name: "flip-in-y", class: "animate-flip-in-y" },
      { name: "flip-out-x", class: "animate-flip-out-x" },
      { name: "flip-out-y", class: "animate-flip-out-y" },
    ],
  },
  {
    name: "Rotating entrances",
    children: [
      { name: "rotate-in", class: "animate-rotate-in" },
      { name: "rotate-in-down-start", class: "animate-rotate-in-down-start" },
      { name: "rotate-in-down-end", class: "animate-rotate-in-down-end" },
      { name: "rotate-in-up-start", class: "animate-rotate-in-up-start" },
      { name: "rotate-in-up-end", class: "animate-rotate-in-up-end" },
    ],
  },
  {
    name: "Rotating exits",
    children: [
      { name: "rotate-out", class: "animate-rotate-out" },
      { name: "rotate-out-down-start", class: "animate-rotate-out-down-start" },
      { name: "rotate-out-down-end", class: "animate-rotate-out-down-end" },
      { name: "rotate-out-up-start", class: "animate-rotate-out-up-start" },
      { name: "rotate-out-up-end", class: "animate-rotate-out-up-end" },
    ],
  },
  {
    name: "Sliding entrances",
    children: [
      { name: "slide-in-down", class: "animate-slide-in-down" },
      { name: "slide-in-start", class: "animate-slide-in-start" },
      { name: "slide-in-end", class: "animate-slide-in-end" },
      { name: "slide-in-up", class: "animate-slide-in-up" },
    ],
  },
  {
    name: "Sliding exits",
    children: [
      { name: "slide-out-down", class: "animate-slide-out-down" },
      { name: "slide-out-start", class: "animate-slide-out-start" },
      { name: "slide-out-end", class: "animate-slide-out-end" },
      { name: "slide-out-up", class: "animate-slide-out-up" },
    ],
  },
  {
    name: "Specials",
    children: [
      { name: "hinge", class: "animate-hinge" },
      { name: "jack-in", class: "animate-jack-in" },
      { name: "jack-out", class: "animate-jack-out" },
      { name: "roll-in", class: "animate-roll-in" },
      { name: "roll-out", class: "animate-roll-out" },
      { name: "particle", class: "animate-particle" },
    ],
  },
  {
    name: "Zooming entrances",
    children: [
      { name: "zoom-in", class: "animate-zoom-in" },
      { name: "zoom-in-down", class: "animate-zoom-in-down" },
      { name: "zoom-in-start", class: "animate-zoom-in-start" },
      { name: "zoom-in-end", class: "animate-zoom-in-end" },
      { name: "zoom-in-up", class: "animate-zoom-in-up" },
    ],
  },
  {
    name: "Zooming exits",
    children: [
      { name: "zoom-out", class: "animate-zoom-out" },
      { name: "zoom-out-down", class: "animate-zoom-out-down" },
      { name: "zoom-out-start", class: "animate-zoom-out-start" },
      { name: "zoom-out-end", class: "animate-zoom-out-end" },
      { name: "zoom-out-up", class: "animate-zoom-out-up" },
    ],
  },
];
