import React, { PureComponent } from "react";
import { AccordionItemConsumer } from "./ItemContext";

export default class AccordionHeading extends PureComponent {
  onSelect = props => {
    const { id, activeId, isDisabled, onSelect } = props;

    if (activeId !== id && !isDisabled) {
      onSelect(id);
    }
  };

  renderChildren = container => {
    const { activeId, id, headingAttributes } = container;
    const { children } = this.props;

    return (
      <div
        onClick={() => this.onSelect(container)}
        className={`accordion__item-heading ${
          activeId === id ? "active" : ""
        }`.trim()}
        {...headingAttributes}
      >
        {children}
      </div>
    );
  };

  render() {
    return <AccordionItemConsumer>{this.renderChildren}</AccordionItemConsumer>;
  }
}
