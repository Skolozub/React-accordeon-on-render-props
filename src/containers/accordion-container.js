import { Component } from "react";

export class AccordionContainer extends Component {
  state = {
    activeItems: [],
    multiply: false
  };

  componentDidMount = () => {
    const { activeItems = [], multiply = false } = this.props;
    this.setState({ multiply, activeItems });
  };

  toggleActiveItem = itemNum => {
    // todo: refactoring this function
    const toggleItem = ({ activeItems, multiply }) => {
      const isItemExist = activeItems.includes(itemNum);
      if (isItemExist)
        return { activeItems: activeItems.filter(item => item !== itemNum) };

      if (!multiply) return { activeItems: [itemNum] };

      return { activeItems: [...activeItems, itemNum] };
    };
    this.setState(toggleItem);

    const { activeItems } = this.state;
    const { onToggle, onOpen, onClose } = this.props;
    const isItemExist = activeItems.includes(itemNum);
    if (onToggle) onToggle(itemNum);
    if (!isItemExist && onOpen) onOpen(itemNum);
    if (isItemExist && onClose) onClose(itemNum);
  };

  render = () => {
    const { activeItems, multiply } = this.state;
    const { children } = this.props;

    return children({ activeItems, multiply, toggle: this.toggleActiveItem });
  };
}
