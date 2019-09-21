import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import { AccordionContainer } from "./containers/accordion-container";
import { Accordion } from "./components/accordion";
import { ListContainer } from "./for-test/containers/list-container";
import { history } from ".";

const accordionItemsExample1 = [
  ["1", "Первый элемент", <LoremIpsum p={3} />],
  ["2", "Второй элемент", <LoremIpsum p={3} />],
  ["3", "Третий элемент", <LoremIpsum p={3} />],
  ["4", "Четвёртый элемент", <LoremIpsum p={3} />]
];

const accordionItemsExample2 = [
  ["1", "Все", ListContainer],
  ["2", "Категории", ListContainer],
  ["3", "Мои", ListContainer],
  ["4", "Режим редактирования", ListContainer]
];

export const App = () => (
  <>
    <AccordionContainer activeItems={["1", "3"]} multiply>
      {props => (
        <Accordion>
          {accordionItemsExample1.map(([key, title, content]) => (
            <Accordion.Item key={key}>
              <Accordion.Title {...props} itemKey={key}>
                {title}
              </Accordion.Title>
              <Accordion.Content {...props} itemKey={key}>
                {content}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion>
      )}
    </AccordionContainer>

    <AccordionContainer
      location={history.location}
      activeItems={["1", "3"]}
      withparams
    >
      {props => (
        <Accordion>
          {accordionItemsExample2.map(([key, title, Component]) => (
            <Accordion.Item key={key}>
              <Accordion.Title {...props} itemKey={key}>
                {title}
              </Accordion.Title>
              <Accordion.Content {...props} itemKey={key}>
                <Component {...props} itemKey={key} />
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion>
      )}
    </AccordionContainer>
  </>
);
