import { Component } from "react";

export class AccordionContainer extends Component {
  state = {
    activeItems: [],
    multiply: false
  };

  componentDidMount = () => {
    const { multiply = false, activeItems = [] } = this.props;
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
  };

  render = () => {
    const { activeItems, multiply } = this.state;
    const { children } = this.props;

    return children({ activeItems, multiply, toggle: this.toggleActiveItem });
  };
}
