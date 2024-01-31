import React, { Component } from 'react';
import FoodItem from './FoodItem'; 
import foodItems from './foodData'; 

class OrderForm extends Component { constructor(props) {
super(props); this.state = { order: [],
totalCost: 0,
};
}
handleQuantityChange(index, quantity) { const updatedOrder = [...this.state.order]; updatedOrder[index] = quantity;
    this.setState({ order: updatedOrder }, () => this.calculateTotalCost());
    }
    
    calculateTotalCost() {
    const totalCost = foodItems.reduce((total, item, index) => { const quantity = this.state.order[index] || 0;
    return total + item.price * quantity;
    }, 0);
    this.setState({ totalCost });
    }
    
    getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); const minutes = now.getMinutes().toString().padStart(2, '0'); return` ${hours}:${minutes}`;
    }
    
    getExpectedDeliveryTime() { const now = new Date();
    now.setMinutes(now.getMinutes() + 60);
    const hours = now.getHours().toString().padStart(2, '0'); const minutes = now.getMinutes().toString().padStart(2, '0'); return `${hours}:${minutes}`;
    }
    
    render() { return (
    <div>
    {foodItems.map((item, index) => (
    <FoodItem key={index} image={item.image} name={item.name}
    price={item.price} onQuantityChange={(quantity) =>
        this.handleQuantityChange(index, quantity)}
        />
        ))} {/* This line was missing a closing parenthesis */}
        <div>
        <p>Total Cost: ₹{this.state.totalCost.toFixed(2)}</p>
        <p>Order Time: {this.getCurrentTime()} (Note - Current
        time)</p>
        <p>Expected Delivery Time:
        {this.getExpectedDeliveryTime()} (Note - Current Time + 60 min)</p>
        </div>
        </div>
        );
        }
        }
        
        export default OrderForm;
           