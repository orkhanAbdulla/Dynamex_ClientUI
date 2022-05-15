import React, { ChangeEvent } from 'react'
import {Container, Row,Col, Input} from "reactstrap"
import {Link, useLocation} from "react-router-dom"
import {Telephone} from "react-bootstrap-icons"
import "./Header.scss"
import { useAsyncData } from '../../../hooks/useAsyncData'
import { ILanguage } from '../../../models'
import { createBrowserHistory } from 'history'


export const Header:React.FC=()=>{

   const [languageData]=useAsyncData<ILanguage[]>("https://localhost:44389/api/languages")
   const {push}=createBrowserHistory()
   
   const {pathname}=useLocation()
   const langCode=pathname.slice(1,3)
   
   const [selectedLangCode,setSelectedLangCode]=React.useState("")
   
   const handleLanguageCodeChange=React.useCallback((event:ChangeEvent<HTMLInputElement>)=>{
    push(`/${event.target.value.toLowerCase()}`)
  },[])
    React.useEffect(()=>{
        setSelectedLangCode(langCode.toUpperCase())
    },[langCode])
    
   const renderSelectoOptions=React.useCallback(()=>{
      if(!!languageData.data){
        return languageData.data.map(({id,code})=>(
          <option key={id} value={code}>{code}</option>
        ))
      }
   },[languageData])
   
    return(
       <div className="header_top">
           <Container className='h-100'>
            <Row className='align-items:center; h-100'>
            <Col xs={6}>
            <div className='header_top_right'>
                  <Link to="">
                  <Telephone className='phone' color='dark'/>
                      *7171
                  </Link>
                  <Link to="">
                    Daşınması qadağan olan məhsullar
                  </Link>
                  <Link to="">
                    Tez-tez verilən suallar
                  </Link>
            </div>
            </Col>
            <Col xs={6}>
            <div className='header_top_left'>
                <div className="lang_box">
                  <Input className='lang_input' type="select" value={selectedLangCode} onChange={(event)=>handleLanguageCodeChange(event)}>
                  {renderSelectoOptions()}
                  </Input>
                </div>
                <Link className='login' to=''>
                    Daxil ol
                </Link>
                <Link className='registration' to=''>
                    Qeydiyyat
                </Link>
                </div>
            </Col>
            </Row>
           </Container>
       </div>
    )
}
