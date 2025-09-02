export type AnimateClass = `animate-${string}`;

export type AnimateGroup = {
  name: string;
  children: Animate[];
};

export type Animate = {
  name: string;
  class: AnimateClass;
};
