import { useEffect } from "react";

export const usePolling = <T>(
  polling: boolean,
  callback: () => T,
  delay = 2000
) => {
  useEffect(() => {
    if (polling) {
      const interval = setInterval(callback, delay);
      return () => clearInterval(interval);
    }
  }, [callback, polling, delay]);
};
