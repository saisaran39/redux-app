import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserMiddleware from '../redux/UserMiddleware';


export default function User() {
    const {user, loading, error} = useSelector((store) => store.userState);
    const {count} = useSelector((store)=> store.counterState);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(UserMiddleware());
    },[])

    if(loading) {
        return <div> Loading</div>
    }
    if(error) {
        return <div>error occured</div>
    }
  return (
    <><div>User: {user.name}</div><div>Count: {count}</div></>
  )
}
