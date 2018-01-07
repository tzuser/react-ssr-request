import React,{Component} from 'react'
import PropTypes from 'prop-types';
const initialRequest=(initialDispatchs)=>WrappedComponent=>{
	class InitComponent extends Component{
		componentWillMount(){
			let {dispatch,getState}=this.context.store;
			//let list=initialDispatchs(getState());
		}
		render() {
		     return <WrappedComponent {...this.props} />
		}
	}
	InitComponent.contextTypes={ store: PropTypes.object.isRequired }
	InitComponent.initialDispatchs=initialDispatchs;
	return InitComponent
}

export default initialRequest