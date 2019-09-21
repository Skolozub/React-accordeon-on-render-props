import { Component } from "react";
import { decodeGetParams } from "../functions";

export class AccordionContainer extends Component {
  state = {
    activeItems: [],
    params: {},
    multiply: false
  };

  setParams = search => {
    const params = decodeGetParams(search);

    this.setState(({ params: prevParams }) => ({
      params: { ...prevParams, ...params }
    }));
  };

  componentDidMount = () => {
    const {
      activeItems = [],
      multiply = false,
      location,
      withparams
    } = this.props;

    this.setState({ activeItems, multiply });
    if (withparams) this.setParams(location.search);
  };

  componentDidUpdate = prevProps => {
    const { location, withparams } = this.props;

    if (!withparams) return null;

    const paramsHasChanged = prevProps.location.search !== location.search;
    if (paramsHasChanged) this.setParams(location.search);
  };

  toggleActiveItem = itemNum => {
    const toggleItem = ({ activeItems, multiply }) => {
      const isItemExist = activeItems.includes(itemNum);
      if (isItemExist)
        return { activeItems: activeItems.filter(item => item !== itemNum) };

      if (!multiply) return { activeItems: [itemNum] };

      return { activeItems: [...activeItems, itemNum] };
    };
    this.setState(toggleItem);
  };

  render = () => {
    const { activeItems, params, multiply, withparams } = this.state;
    const { children } = this.props;

    return children({
      activeItems,
      params,
      multiply,
      withparams,
      toggle: this.toggleActiveItem
    });
  };
}
