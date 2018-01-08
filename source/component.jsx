import React,{Component} from 'react'
import PropTypes from 'prop-types';
const initialRequest=(initialDispatchs)=>WrappedComponent=>{
	class InitComponent extends Component{
		getData(){
			let {dispatch,getState}=this.context.store;
			let list=initialDispatchs(getState());
			list.map(item=>{
				dispatch(item);
			})
		}
		render() {
		     return <WrappedComponent {...this.props} sendRequest={this.getData.bind(this)} />
		}
	}
	InitComponent.contextTypes={ store: PropTypes.object.isRequired }
	InitComponent.initialDispatchs=initialDispatchs;
	return InitComponent
}

export default initialRequest