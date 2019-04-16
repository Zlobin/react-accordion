import React, { PureComponent } from "react";
import { AccordionItemConsumer } from "./ItemContext";

export default class AccordionPanel extends PureComponent {
  renderChildren = container => {
    const { children } = this.props;
    const { panelAttributes } = container;

    return (
      <div className="accordion__item-panel" {...panelAttributes}>
        {children}
      </div>
    );
  };

  render() {
    return <AccordionItemConsumer>{this.renderChildren}</AccordionItemConsumer>;
  }
}
