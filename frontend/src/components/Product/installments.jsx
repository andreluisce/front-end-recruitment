import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './installments.scss';

@CSSModules(styles)
export default class Installment extends Component {
	constructor(props) {
		super(props)
	}
	static defaultProps = {
		price: 0,
		installments: 0
	};

	static propTypes = {
		price: PropTypes.number,
		installments: PropTypes.number,
	};

	render() {
		const {
      price,
			installments,
    } = this.props;

		if (!!this.props.installments) {
			return <p styleName='installments'> ou {this.props.installments} x <strong>R$ {this.props.price}</strong></p>
		}
		return null
	}
}