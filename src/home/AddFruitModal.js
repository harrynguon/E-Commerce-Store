import React from 'react';
import M from 'materialize-css';

class AddFruitModal extends React.Component {

    constructor(props) {
        super(props);
        // Value = amount in grams
        this.state = {
            value: '100'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        M.Modal.init(this.refs.modal, null);
        M.FormSelect.init(this.refs.select, null);
    }

    handleChange(e) {
        this.setState({
            value: String(e.target.value)
        });
    }

    render() {
        return (
            <div>
                {/** Trigger */}
                <button data-target={`modal1-${this.props.fruit.name}`} 
                        className="btn white black-text waves-effect modal-trigger"
                >
                    Add To Cart
                </button>
                {/** Content */}
                <div id={`modal1-${this.props.fruit.name}`} className="modal" ref='modal'>

                    <div className="modal-content">
                        <h4>Add {this.props.fruit.name} To Your Cart?</h4>
                        <div className="section"></div>

                        {/** Select Input field */}
                        <div className="input-field">
                            <select ref="select" value={this.state.value} onChange={this.handleChange}>
                                <option value="100">100g</option>
                                <option value="200">200g</option>
                                <option value="500">500g</option>
                                <option value="1000">1kg</option>
                            </select>
                            <label>Amount in Grams</label>
                        </div>

                        <div className="section"></div>
                        <div className="section"></div>
                        <div className="section"></div>
                    </div>
                    
                    <div className="modal-footer">
                        <button className="modal-close btn-flat black-text">Cancel</button>
                        <button
                            onClick={() => {
                                showToast(this.props.fruit.name, this.state.value);
                                this.props.addToCart(this.props.fruit.name, this.props.fruit.price, this.state.value)
                            }} 
                            className="modal-close btn-flat black-text"
                        >
                           Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const showToast = (itemName, value) => {
    const valueText = value === '1000' 
                                ? '1kg' 
                                : value + 'g';
    M.toast(
        {
            html: `${valueText} of ${itemName} has been added to your cart!`,
            displayLength: '1500'
        }
    );
}

export default AddFruitModal;