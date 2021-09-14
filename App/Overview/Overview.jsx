import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery.jsx';
import Description from './Description.jsx';
import Features from './Features.jsx';
import Title from './Title.jsx';
import Styles from './Styles.jsx';
import $ from 'jquery';
import '../css/Overview.css';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    $.get('/products', {product_id: 47421}, (data) => {
      this.setState({currentId: data.id, productName: data.name, productSlogan: data.slogan, productDescription: data.description, productDefaultPrice: data.default_price, productFeatures: data.features});
    });
  }

  render() {
    return <div id={'overview-container'}>
      {/* <p>Overview Component</p> */}
      <Gallery />
      <div id={'basics'}>
        <Title />
        <Styles />
      </div>
      <Description slogan={this.state.productSlogan} description={this.state.productDescription} />
      <Features features={this.state.productFeatures} />
    </div>;
  }
}

export default Overview;