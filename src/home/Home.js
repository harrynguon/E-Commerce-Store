import React from 'react';
import { connect } from 'react-redux';

import Item from './Item';

const Home = (props) => {
  return (
    <div className="container">
      { 
          props.inventory
                .map(item => <Item item={item} />)
      }
    </div>
  );
}

const mapStateToProps = (reducer) => {
    return {
        inventory: reducer.inventory
    }
} 

export default connect(mapStateToProps)(Home);
