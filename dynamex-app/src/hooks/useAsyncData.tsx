import React from 'react'
import { IAsyncData} from '../models'
import {INITIAL_ASYNC_DATA} from '../const'
import axios from 'axios'

export function useAsyncData<T>(url:string):[IAsyncData<T>,(params?:any)=>void] {
    const [data,setData]=React.useState<IAsyncData<T>>(INITIAL_ASYNC_DATA)
    
    const getData=React.useCallback((params?:any)=>{
        setData((oldDate)=>({...oldDate,loading:true}))
        axios.get<T>(url,{params}).then(({data})=>{
            setData((oldDate)=>({...oldDate,loading:false,data:data}))
        }).catch((error)=>{
            setData({data:undefined,loading:false,error:error.toString() })
      })
    },[])
 
    React.useEffect(()=>{
        getData()
    },[getData])

    return(
        [data,getData]
    )
}
