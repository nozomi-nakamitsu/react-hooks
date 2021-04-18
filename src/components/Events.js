import React,{useContext,useEffect} from 'react'
import Event from "./Event"
import AppContext from "../contexts/AppContext"
import styled from 'styled-components';




const Events = () => {
  const {state}=useContext(AppContext)

  
return(
  <Body>
  <h4>イベント一覧</h4>
  <table className="table table-hover">
    <thead>
      <tr>
        <th>ID</th>
        <th>タイトル</th>
        <th>ボディー</th>
        <th></th>
      </tr>
    </thead>
    {state.events.map((event,index)=>(<Event key={index} event={event}/>))}
    <tbody>
    </tbody>
  </table>
  </Body>
)


}


// styled component
const Body = styled.div`
  color: red;
  table{
    color:red;
  }
`
export default Events


