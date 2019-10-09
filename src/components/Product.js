import React, {Component} from 'react';
import items from '../data/data';
// 51 lines of code minus this comment
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: items,
            isChecked: true
        };
        this.getInitialState = this.getInitialState.bind(this);
        this.toggleStock = this.toggleStock.bind(this);
    }

    getInitialState = () => {
        return {"showStock": "show"};
    };

    toggleStock = () => {
        let css = (this.state.showStock === "hidden") ? "show" : "hidden";
        this.setState({
            "showStock": css,
            isChecked: !this.state.isChecked,
        });
    };

    render() {
        const {items} = this.state;
        return (
            <div className="container"><h3>Class Component</h3>
                <input type="checkbox"
                       checked={this.state.isChecked}
                       onChange={this.toggleStock}/>
                {items.row.map((value, index) => (
                    <div key={index}>
                        <div>{value.level}</div>
                        {value.locations.map((val, idx) => (
                            <div key={idx}>
                                <p>{val.name}</p>
                                {val.stock.map((v, i) => (
                                    <p key={i}
                                       className={this.state.showStock}>
                                        <span>Product: </span>{v.product}
                                        <span>&nbsp;Qty: </span>{v.qty}</p>
                                ))}
                            </div>
                        ))}
                        <hr/>
                    </div>
                ))}
            </div>
        );
    }
}

export default Product;
