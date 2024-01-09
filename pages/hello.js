import { forwardRef, useEffect, useRef, useState, useImperativeHandle } from "react";

const AltComponent = (props, ref) => {

  const { addRef } = props;

  const altRef = useRef();

  useEffect(() => {
    console.log("alt component tamamen yüklendi.");
    /* addRef(altRef); */
    addRef(altRef);
  }, [])

  return (
    <>
      <p ref={altRef}>
        {props.text}
      </p>
    </>
  );
};

/* export default forwardRef(AltComponent); */
export default AltComponent;