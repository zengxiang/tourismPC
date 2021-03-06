'use strict';
import React, {Component} from 'react';
import {
	Image
} from 'react-native';

// import Frame from './frame';
import TabbarVC from './Tabbar';

export default class Default extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	// 加载启动页面
	componentDidMount() {
		this.timer = setTimeout(() => {
			this._navigateToFrame()
		}, 2000);
	}
	_navigateToFrame() {
		let {navigator} = this.props;
		if (navigator) {
			navigator.replace({
				name: 'TabbarVC',
				component: TabbarVC
			})
		}
	}

	render() {
		return (
			<Image source={require('./../img/hello_page_bg.png')} style={styles.backgroundImage}/>
		)
	}

	componentWillUnmount() {
		this.timer && clearTimeout(this.timer);
	}
}

const styles = {
	backgroundImage: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: null,
		height: null,
		resizeMode: 'cover'
	}
}