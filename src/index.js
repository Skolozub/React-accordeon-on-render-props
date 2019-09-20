import React from "react";
import ReactDOM from "react-dom";
import { LoremIpsum } from "react-lorem-ipsum";

import { AccordionContainer } from "./containers/accordion-container";
import { Accordion } from "./components/accordion";

const accordionItems = [
  ["Первый элемент", <LoremIpsum p={3} />],
  ["Второй элемент", <LoremIpsum p={3} />],
  ["Третий элемент", <LoremIpsum p={3} />],
  ["Четвёртый элемент", <LoremIpsum p={3} />]
];

const App = () => (
  <AccordionContainer activeItems={[0, 3]} multiply>
    {props => (
      <Accordion>
        {accordionItems.map(([title, content], index) => (
          <Accordion.Item key={index}>
            <Accordion.Title {...props} itemKey={index}>
              {title}
            </Accordion.Title>
            <Accordion.Content {...props} itemKey={index}>
              {content}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion>
    )}
  </AccordionContainer>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
