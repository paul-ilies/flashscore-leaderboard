import { useState, useLayoutEffect, useRef } from "react";

function Tip({ targetRef, children }) {
  const [tipLayout, setTipLayout] = useState({
    style: {},
    position: "top",
  });

  const tipRef = useRef(null);

  useLayoutEffect(() => {
    const tipRect = tipRef.current.getBoundingClientRect();
    const targetRect = targetRef.current.getBoundingClientRect();

    const left = targetRect.left + targetRect.width / 2 - tipRect.width / 2;
    setTipLayout({
      position: "bottom",
      style: { left, top: targetRect.bottom + 15 },
    });
  }, [targetRef]);

  return (
    <span
      ref={tipRef}
      className={`tooltip tooltip-bottom`}
      style={tipLayout.style}
    >
      {children}
    </span>
  );
}

function Tooltip({ tip, children }) {
  const [isHovered, setIsHovered] = useState(false);
  const contentRef = useRef(null);

  const handleToggleHover = () => setIsHovered((h) => !h);

  return (
    <>
      <span
        className="w-full flex justify-center"
        ref={contentRef}
        onMouseEnter={handleToggleHover}
        onMouseLeave={handleToggleHover}
      >
        {children}
      </span>
      {isHovered && <Tip targetRef={contentRef}>{tip}</Tip>}
    </>
  );
}

export default Tooltip;
