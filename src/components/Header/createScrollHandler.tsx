export const createScrollHandler =
  (
    lastScroll: React.RefObject<number>,
    timeout: React.RefObject<number | null>,
    ticking: React.RefObject<boolean>,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
  ) =>
  () => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        const currentScroll = window.scrollY;

        if (currentScroll > lastScroll.current + 5) {
          setVisible(false);
          if (timeout.current) clearTimeout(timeout.current);
        } else if (currentScroll < lastScroll.current - 5) {
          setVisible(true);
          if (timeout.current) clearTimeout(timeout.current);
          timeout.current = window.setTimeout(() => setVisible(false), 3000);
        }

        lastScroll.current = currentScroll;
        ticking.current = false;
      });
      ticking.current = true;
    }
  };
