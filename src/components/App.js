import React,{useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from "../reducers"
import EventForm from "./EventForm"
import Events from "./Events"
import OperationLogs from "./OperationLogs"

import AppContext from "../contexts/AppContext"
import operationLogs from '../reducers/operationLogs';
// styled component導入
import styled from 'styled-components';


const  App = ()=>{
  const initialState = {
    events: [],
    operationLogs: []
  }
const [state,dispatch]= useReducer(reducer,initialState)


  return (
    <Container>
    <AppContext.Provider value={{state,dispatch}}>
    <div className="container-fluid">
      <EventForm/>
      <Events/>
      <OperationLogs/>
    </div>
      </AppContext.Provider>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: pink;
`








// カウンターアプリ
// import React,{useState,useEffect} from 'react';


// const  App = props=>{

// const [state,setState]=useState(props)
// const{name,price}=state


// useEffect(()=>{
//   console.log("this is DidMount or componentike componentDidupdate")
// })

// useEffect(()=>{
//   console.log("this is DidMount")
// },[])

// useEffect(()=>{
//   console.log("this callback is for only name")
// },[name])

//   return (
//     <>
//     <p>現在の{name}は{price}円です。</p>
//     <button onClick={()=>setState({...state,price: price +1})}> +1</button>
//     <button onClick={()=>setState({...state,price: price -1})}> -1</button>
//     <button onClick={()=>setState(props)}>reset</button>
//     <input value={name} onChange={e=>setState({...state,name: e.target.value})}/>

//     </>
//   );
// }
// App.defaultProps={
//   name: "サンプル",
//   price: 1000
// }


// export default App;
