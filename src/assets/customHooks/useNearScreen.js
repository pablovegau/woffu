import { useState, useEffect, useRef } from 'react';

export function useNearScreen() {
  const element = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(function(entries) {
      const { isIntersecting } = entries[0];

      if (isIntersecting) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    observer.observe(element.current);

    return () => {
      observer.disconnect();
    };
  }, [element]);

  return [show, element];
}
