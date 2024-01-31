import React, { Component } from 'react';
import styles from './FoodItem.module.css'; 

class FoodItem extends Component { constructor(props) {
super(props); this.state = {
quantity: 0,
};
}

handleQuantityChange(event) {
const quantity = parseInt(event.target.value, 10); this.setState({ quantity }); this.props.onQuantityChange(quantity);
}

render() { return (
<div className={styles.foodItem}>
<img src={this.props.image} alt={this.props.name} className={styles.foodImage} />
<p>{this.props.name}</p>
<p>{this.props.price}₹</p>
<input
type="number" value={this.state.quantity}
onChange={(e) => this.handleQuantityChange(e)}
/>
</div>
);
}
}

export default FoodItem;
