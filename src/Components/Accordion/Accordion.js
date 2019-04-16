import React, { PureComponent } from "react";
import { AccordionConsumer, AccordionProvider } from "./Context";

class Accordion extends PureComponent {
  renderConsumer = () => {
    const { children, ...rest } = this.props;
    return <div {...rest}>{children}</div>;
  };

  render() {
    const { className, ...rest } = this.props;

    return (
      <div className={`accordion ${className ? className : ""}`.trim()}>
        <AccordionProvider {...rest}>
          <AccordionConsumer>{this.renderConsumer}</AccordionConsumer>
        </AccordionProvider>
      </div>
    );
  }
}

export default Accordion;
