
import React,{useReducer,useState,useContext,useEffect} from 'react'
import { TextField } from '@material-ui/core';
import styled from 'styled-components';
import{
  CREATE_EVENT,
  DELETE_ALLEVENT,
  ADD_OPERATION_LOG,
  DELETE_OPERATIONS_LOG
} from "../actions"
import AppContext from "../contexts/AppContext"
import {timeCurrentIso8601} from "../utils"



const EventForm = () => {
  const {state,dispatch}=useContext(AppContext)
  const [title,setTitle]=useState("")
  const [body,setBody]=useState("")
  const addEvent= e =>{
    e.preventDefault()
    dispatch({
      type: CREATE_EVENT,
      title,
      body
    })
    dispatch({
      type: ADD_OPERATION_LOG,
      description:"イベントを作成しました",
      operatedAt: timeCurrentIso8601()
    })
    setTitle("")
    setBody("")
  }



  const deleteAllEvents=e=>{
    e.preventDefault()
    const result=window.confirm("すべてのイベントを本当に削除してもよろしいですか？")
    if (result){
      dispatch({type: DELETE_ALLEVENT})
      dispatch({
        type: ADD_OPERATION_LOG,
        description:"すべてのイベントを削除しました",
        operatedAt: timeCurrentIso8601()
      })
    }
  }
  const deleteAllOperationLogs=e=>{
    e.preventDefault()
    const result=window.confirm("すべての操作ログを本当に削除してもよろしいですか？")
    if (result){
      dispatch({
        type: DELETE_OPERATIONS_LOG
      })
    }
  }

// 入力された時に大文字に変換する
  useEffect(() => {
    const timerId = setTimeout(() => {
        setTitle(value => value.toUpperCase());
      }, 1000);
      return () => { clearTimeout(timerId); };
    },
    [title]
  );

  useEffect(() => {
    const timerId2 = setTimeout(() => {
        setBody(value => value.toUpperCase());
      }, 1000);
      return () => { clearTimeout(timerId2); };
    },
    [body]
  );

  const unCreatable=title===""||body===""

return(
  <Body>

  <h4>イベント作成フォーム</h4>
   <form  noValidate autoComplete="off">
     <div className="events_forms">
     <div className="form-group">
     <TextField id="standard-basic" label="タイトル" value={title} onChange={e=>setTitle(e.target.value)}></TextField>
     </div>
     <div className="form-group">
     <TextField id="standard-basic" label="ボディ"value={body} onChange={e=>setBody(e.target.value)} />
     </div>
     </div>

     <button className="btn btn-primary"onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
     <button className="btn btn-danger"onClick={deleteAllEvents} disabled={state.events.length===0} >全てのイベントを削除する</button>
     <button className="btn btn-danger" onClick={deleteAllOperationLogs} disabled={state.operationLogs.length===0} >全ての操作ログを削除する</button>
   </form>
  </Body>
)
}

// styled component
const Body = styled.div`
.events_forms{
  display:flex;
}
.form-group{
  padding: 20px;
}
`

export default EventForm