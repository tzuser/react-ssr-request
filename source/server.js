import { matchPath } from 'react-router';
const initalRequest=async (store,url,config)=>{
	let branch=[];
	config.map(item=>{
		let route=matchPath(url,item)
		if(route)branch.push(item)
	})
	let promises=[];
	for(let i in branch){
		let route=branch[i];
		if(route.request){
			let comp=require(route.request);
      		let initialDispatchs=comp.initialDispatchs
			if(!initialDispatchs && comp.default){initialDispatchs=comp.default.initialDispatchs}
			if(comp && initialDispatchs){
				let actList=initialDispatchs(store.getState());
				actList.map(item=>{
					promises.push(store.dispatch(item));
				})
			}
		}
	}
	await Promise.all(promises).catch(err=>console.log('initialRequest:ERROR',err))
}
export default initalRequest