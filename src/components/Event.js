
import React, {useContext} from 'react'
import { Button } from '@material-ui/core';
import{
  DELETE_EVENT,
  ADD_OPERATION_LOG,
  DELETE_OPERATIONS_LOG
} from "../actions"
import AppContext from "../contexts/AppContext"
import {timeCurrentIso8601} from "../utils"

const Event = ({event}) => {
  const {dispatch}= useContext(AppContext)
  const id = event.id
  const handleClickDeleteButton = () => {
    const result=window.confirm(`イベント(id=${id})を本当に削除してもよろしいですか？`)
    if(result){
      dispatch({ type: DELETE_EVENT, id })
      const result=window.confirm(`イベント(id=${id})を削除しました`)
      if (result){
        dispatch({
          type: ADD_OPERATION_LOG,
          description:`イベント(id=${id})を削除しました`,
          operatedAt: timeCurrentIso8601()
        })
      }
    }
  }
  return (
    <>
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td><Button variant="contained" color="secondary" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</Button></td>
    </tr>
    </>

  )
}


export default Event




