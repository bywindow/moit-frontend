import React from 'react';
import { restaurantApi } from '../api/api-backend';
import HomeIndex from './HomeIndex';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      result: [],
      totalOrder: 0,
      waitingOrder: 0,
      makingOrder: 0,
      deliveryOrder: 0,
    };
  }
  /** 💥 Token */
  async componentDidMount() {
    let result = null;
    let id = parseInt(this.props.location.pathname.substring(1));
    try {
      result = await restaurantApi.getinfo(id);
      // this.setState({
      //   result: result.data.orders,
      // });
    } catch (error) {
      console.log(error);
    } finally {
      if(result){
        this.setState({
          ...this.state,
          result: result.data.orders,
          totalOrder: result.data.totalOrderCount,
          waitingOrder: result.data.readyOrderCount,
          makingOrder: result.data.cookingOrderCount,
          deliveryOrder: result.data.completedOrderCount,
        })
      }
      console.log(result)
    }
  };

  //10초에 한번씩 요청
  async componentWillUpdate(nextProps, nextState) {
    setInterval(async () => {
        let result = null;
        let id = 1;
        try {
          result = await restaurantApi.getinfo(id);
          // this.setState({
          //   result: result.data.orders,
          // });
        } catch (error) {
          console.log(error);
        } finally {
          if(result){
            this.setState({
              ...this.state,
              result: result.data.orders,
              totalOrder: result.data.totalOrderCount,
              waitingOrder: result.data.readyOrderCount,
              makingOrder: result.data.cookingOrderCount,
              deliveryOrder: result.data.completedOrderCount,
            })
          }
        console.log(result)
    }
    }, 10000)
  }


  render() {
    return (
      <HomeIndex
        props={this.state.props}
        result={this.state.result}
        totalOrder={this.state.totalOrder}
        waitingOrder={this.state.waitingOrder}
        makingOrder={this.state.makingOrder}
        deliveryOrder={this.state.deliveryOrder}
      />
    );
  }
}