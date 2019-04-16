import React from "react";
import { AccordionItemProvider } from "./ItemContext";

function AccordionItem({ className, children, isDisabled, ...rest }) {
  return (
    <AccordionItemProvider {...rest} isDisabled={isDisabled}>
      <div
        className={`accordion__item ${className ? className : ""} ${
          isDisabled ? "disabled" : ""
        }`.trim()}
      >
        {children}
      </div>
    </AccordionItemProvider>
  );
}

export default AccordionItem;
