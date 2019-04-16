import React, { PureComponent, createContext } from "react";

const { Provider, Consumer } = createContext();

export class AccordionProvider extends PureComponent {
  state = {
    activeId: this.props.activeId
  };

  onSelect = activeId => {
    const { onToggle = () => {} } = this.props;

    this.setState(
      {
        activeId
      },
      () => {
        onToggle(activeId);
      }
    );
  };

  render() {
    const { children } = this.props;
    const { activeId } = this.state;

    return (
      <Provider
        value={{
          onSelect: this.onSelect,
          activeId
        }}
      >
        {children || null}
      </Provider>
    );
  }
}

export class AccordionConsumer extends PureComponent {
  renderChildren = container =>
    container ? this.props.children(container) : null;

  render() {
    return <Consumer>{this.renderChildren}</Consumer>;
  }
}
