import React from "react";
import { Item } from "./item";
import { Content } from "./content";
import { Title } from "./title";

export const Accordion = ({ children }) => <>{children}</>;

Accordion.Item = Item;
Accordion.Title = Title;
Accordion.Content = Content;
