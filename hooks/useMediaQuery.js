import { useEffect, useState } from "react";

export const useMediaQuery = (query) => {
  const isClient = typeof window === "object";

  const [matches, setMatches] = useState(() => {
    if (isClient) {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    if (isClient) {
      const mediaQueryList = window.matchMedia(query);
      const handleChange = (event) => setMatches(event.matches);

      mediaQueryList.addEventListener("change", handleChange);
      setMatches(mediaQueryList.matches);

      return () => {
        mediaQueryList.removeEventListener("change", handleChange);
      };
    }
  }, [query, isClient]);

  return matches;
};
