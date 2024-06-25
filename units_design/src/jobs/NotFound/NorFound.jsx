import React from 'react'
import notfound from './img/notfound.svg'


export default function NotFoundPage() {
  

  return (
    <div className='d-flex  justify-content-center w-100'style={{marginTop:"4rem",marginBottom:"4rem"}}>
    <div className='d-flex flex-column justify-content-between 'style={{alignItems:"center",width: "35.9rem",height:"32.5",gap:"2rem"}}>
    <img style={{width: "25.9375rem",height: "25.8125rem"}}src={notfound} alt="Not Found" />
     

<span className='w-100 ' style={{
    color:" #292D32",
    fontFamily: "Cairo",
    fontSize: "2.75rem",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "1.5rem",
    textAlign:"center"
}}>
    عذرا لقد حدث خطا ما
   </span>

    </div>
    </div>
  )
}
