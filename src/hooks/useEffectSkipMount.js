import { useEffect, useRef } from "react";

export const useEffectSkipMount = (cb, dependency) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) return cb();

    didMount.current = true;
  }, dependency);
};
