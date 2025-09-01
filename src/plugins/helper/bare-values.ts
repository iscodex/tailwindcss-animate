import tailwindPackage from "tailwindcss/package.json";

function isLegacyTailwind(): boolean {
  return tailwindPackage.version?.startsWith("3.") ?? false;
}

function isPositiveInteger(value: string | number): boolean {
  const num = Number(value);
  return Number.isInteger(num) && num >= 0 && String(num) === String(value);
}

type BareValueInput = {
  value: string | number;
};

type BareValueHandler = {
  __BARE_VALUE__?: (value: BareValueInput) => string | number | undefined;
};

export function getBareMilliseconds(): BareValueHandler {
  if (isLegacyTailwind()) {
    return {};
  }

  return {
    __BARE_VALUE__: (value) => {
      if (isPositiveInteger(value.value)) {
        return `${value.value}ms`;
      }
    },
  };
}

export function getBareIntegers(): BareValueHandler {
  if (isLegacyTailwind()) {
    return {};
  }

  return {
    __BARE_VALUE__: (value) => {
      if (isPositiveInteger(value.value)) {
        return Number(value.value);
      }
    },
  };
}
