import redux from 'redux' 

const couterReducer = (state=0 , action) =>{
      if(action.type === 'increment'){
         return ({
             counter : state.counter + 1,
         })
      }

      if(action.type === 'decrement'){
        return ({
            counter : state.counter - 1,
        })
     }
}
const store = redux.createStore(couterReducer)

export default store;


