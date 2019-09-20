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
    const toggler = ({ activeItems, multiply }) => {
      const isItemExist = activeItems.includes(itemNum);
      if (isItemExist)
        return { activeItems: activeItems.filter(item => item !== itemNum) };

      if (!multiply) return { activeItems: [itemNum] };

      return { activeItems: [...activeItems, itemNum] };
    };
    this.setState(toggler);

    const { onToggle } = this.props;
    if (onToggle) onToggle(itemNum);
  };

  render = () => {
    const { activeItems, multiply } = this.state;
    const { children } = this.props;

    return children({ activeItems, multiply, toggle: this.toggleActiveItem });
  };
}
