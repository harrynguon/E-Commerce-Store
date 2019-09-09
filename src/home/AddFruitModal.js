import React from 'react';
import M from 'materialize-css';

class AddFruitModal extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        M.Modal.init(this.Modal, null);
    }

    render() {
        return (
            <div>
                {/** Trigger */}
                <button data-target={`modal1-${this.props.fruit.name}`} 
                        class="btn white black-text waves-effect modal-trigger"
                >
                    Add To Cart
                </button>
                {/** Content */}
                <div id={`modal1-${this.props.fruit.name}`} class="modal" ref={modal => this.Modal = modal}>
                    <div class="modal-content">
                        <h4>Add { this.props.fruit.name } To Your Cart?</h4>
                        <p>A bunch of text</p>
                    </div>
                    <div class="modal-footer">
                        <a  href="#!" class="modal-close btn-flat black-text">Cancel</a>
                        <a  href="#!" 
                            onClick={() => {
                                showToast(this.props.fruit.name);
                                this.props.addToCart(this.props.fruit.name, this.props.fruit.price)
                            }} 
                           class="modal-close btn-flat black-text"
                        >
                           Add to Cart
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

const showToast = (itemName) => {
    M.toast(
        {
            html: `${itemName} have been added to your cart!`,
            displayLength: '1500'
        }
    );
}

export default AddFruitModal;