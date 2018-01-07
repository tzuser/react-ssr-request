import { matchRoutes } from 'react-router-config';

const initalRequest=async (store,url,config)=>{
	let branch=matchRoutes(config,url);
	let promises=[];
	for(let i in branch){
		let route=branch[i].route;
		if(route.request){
			let comp=require(route.request);
			if(comp && comp.initialDispatchs){
				let actList=comp.initialDispatchs(store.getState());
				actList.map(item=>{
					promises.push(store.dispatch(item));
				})
			}
		}
	}
	await Promise.all(promises).catch(err=>console.log('initialRequest:ERROR',err))
}
export default initalRequest