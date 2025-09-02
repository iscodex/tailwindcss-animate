import { useState } from "react";

function useAnimControl() {
  const [key, setKey] = useState(0);

  const replay = () => setKey((prev) => prev + 1);

  return { key, replay };
}

export { useAnimControl };
