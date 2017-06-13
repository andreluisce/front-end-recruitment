import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { PropTypes } from 'prop-types';
import styles from './product.scss'
import Installments from './installments/installments'
import Price from './Price/price'
import Image from './Image/image'

@CSSModules(styles)
export default class Product extends Component {
  constructor(props) {
    super(props)
  }
  static defaultProps = {
    title: "",
    sku: "",
    products: [],
    price: 0,
    installments: 0
  };

  static propTypes = {
    title: PropTypes.string,
    sku: PropTypes.string,
    products: PropTypes.array,
    price: PropTypes.number,
    installments: PropTypes.number,
  };

  render() {
    const {
      title,
      sku,
      products,
      price,
      installments,
    } = this.props;

    return (<div {... { title: title, className: 'product' } } >
      <Image { ...this.props } />
      <h3 className='title'> {title}</h3>
      <div styleName='sticky'>
        <Price { ...this.props } />
        <Installments { ...this.props } />
      </div>
    </div>
    );
  }
}