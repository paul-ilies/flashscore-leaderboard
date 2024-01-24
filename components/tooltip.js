import clsx from "clsx";
import { useState, useLayoutEffect, useRef } from "react";

function Tip({ targetRef, children, leftPosition }) {
  const [tipLayout, setTipLayout] = useState({
    style: {},
  });

  const tipRef = useRef(null);

  useLayoutEffect(() => {
    const tipRect = tipRef.current.getBoundingClientRect();
    const targetRect = targetRef.current.getBoundingClientRect();
    console.log(targetRect);
    const left = targetRect.left + targetRect.width / 2 - tipRect.width / 2;

    setTipLayout({
      style: {
        left: leftPosition ? targetRect.left : left,
        top: targetRect.bottom + 15,
      },
    });
  }, [leftPosition, targetRef]);

  return (
    <span
      ref={tipRef}
      className={clsx(
        `tooltip`,
        leftPosition ? "tooltip-left" : "tooltip-bottom"
      )}
      style={tipLayout.style}
    >
      {children}
    </span>
  );
}

function Tooltip({ tip, children, leftPosition }) {
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
      {isHovered && (
        <Tip targetRef={contentRef} leftPosition={leftPosition}>
          {tip}
        </Tip>
      )}
    </>
  );
}

export default Tooltip;
