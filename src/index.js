import React, { PureComponent } from "react";
import { render } from "react-dom";
import Accordion, {
  AccordionItem,
  AccordionHeading,
  AccordionPanel
} from "./Components/Accordion/";

import "./styles.css";

class App extends PureComponent {
  onItemClick = props => {
    console.log("Yep!", props);
  };

  onToggle = activeId => {
    console.log(`Select tab #${activeId}`);
  };

  render() {
    const accordionConfig = {
      className: "custom",
      activeId: "tab3",
      onToggle: this.onToggle
    };
    const headingAttributes = {
      foo: "bar"
    };
    const panelAttributes = {
      bar: "baz"
    };

    return (
      <Accordion {...accordionConfig}>
        <AccordionItem id="tab1" onClick={this.onItemClick}>
          <AccordionHeading>
            <span>Tab1</span>
          </AccordionHeading>
          <AccordionPanel>Some text</AccordionPanel>
        </AccordionItem>

        <AccordionItem panelAttributes={panelAttributes} id="tab2" isDisabled>
          <AccordionHeading>Tab2</AccordionHeading>
          <AccordionPanel>
            <i>Some text2</i>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem
          headingAttributes={headingAttributes}
          id="tab3"
          className="test"
        >
          <AccordionHeading>Tab3</AccordionHeading>
          <AccordionPanel>
            <b>Some text3</b>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem id="tab4">
          <AccordionHeading>Tab4</AccordionHeading>
          <AccordionPanel>Some text4</AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  }
}

render(<App />, document.getElementById("root"));
