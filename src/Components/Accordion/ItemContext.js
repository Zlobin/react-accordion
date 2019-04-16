import React, { PureComponent, createContext } from "react";
import { AccordionConsumer } from "./Context";

const { Provider, Consumer } = createContext();

class ItemProvider extends PureComponent {
  onSelect = () => {
    const { accordionContext, id, onClick = () => {} } = this.props;

    accordionContext.onSelect(id);
    // Custom click.
    onClick(this.props);
  };

  renderChildren = () => {
    const { children, accordionContext, ...rest } = this.props;
    const value = {
      onSelect: this.onSelect,
      activeId: accordionContext.activeId,
      ...rest
    };

    return <Provider value={value}>{children}</Provider>;
  };

  render() {
    return <AccordionConsumer>{this.renderChildren}</AccordionConsumer>;
  }
}

export const AccordionItemProvider = props => {
  const { children, ...rest } = props;

  return (
    <AccordionConsumer>
      {accordionContext => (
        <ItemProvider {...rest} accordionContext={accordionContext}>
          {children}
        </ItemProvider>
      )}
    </AccordionConsumer>
  );
};

export class AccordionItemConsumer extends PureComponent {
  renderChildren = container =>
    container ? this.props.children(container) : null;

  render() {
    return <Consumer>{this.renderChildren}</Consumer>;
  }
}
