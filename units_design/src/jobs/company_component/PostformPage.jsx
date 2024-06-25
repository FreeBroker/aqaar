import React, { useEffect, useState } from 'react'
import PostForm from './Postcomp/PostForm'
import * as Company from "../network/api/company"

export default function PostformPage() {

  return (
    <div className='PostformPage-div '>
      <div className='div-form'>
        <PostForm></PostForm>
      </div>
      <div className='div-Rated '>
        <div className='div-Rated-paras'>
          <h1 className='div-Rated-para'>Rated #1 in increasing quality of hire1</h1>
          <p className='div-Rated-para'>Post your job on the world’s largest professional network and use simple tools to prioritize the most qualified candidates - so you can find the people you want to interview, faster.</p>
          <p className='div-Rated-para2'>1Versus leading competitors.</p>
        </div>
        <div className='div2-div2 bg-dark'>
          <img src='https://static.licdn.com/aero-v1/sc/h/e6d8pqfft0d4qnql1eygjkhug' className='div2-div2'></img>
        </div>
      </div>

      <div className='div-control my-5'>
        <h2 className='' style={{ textAlign: "start" }}>You control how much you want to spend</h2>
        <div className='cards_div'>

          <div className='card-div'>
            <img className='card-div-img' src='https://static.licdn.com/aero-v1/sc/h/aqy8l20l3w5ew9ir3tca68hss'></img>
            <h3 className=''  >Choose your budget</h3>
            <p className=''> You can adjust your spending or close your job at any time.</p>
          </div>

          <div className='card-div '>
            <img className='card-div-img' src='https://static.licdn.com/aero-v1/sc/h/6z802sdc4gk9gjfpicuymg00f'></img>
            <h3 className=''  >Receive more applicants</h3>
            <p className=''>Pay to promote your job post to relevant candidates across Aqar. </p>
          </div>

          <div className='card-div'>
            <img className='card-div-img' src='	https://static.licdn.com/aero-v1/sc/h/49v9h35mq49shqan9ly966fk0'></img>
            <h3 className=''  >Only pay for results</h3>
            <p className=''>Your budget is only used when someone clicks on your job post. </p>
          </div>
        </div>

      </div>


      <div className='div-join'>
        <h1 className='' style={{ textAlign: "start", fontSize: "3.1rem" }}>Join over 30 million businesses that hire on Aqar</h1>
        <div className='div-join-sub '>
          <img className='div-join-img' src="https://static.licdn.com/aero-v1/sc/h/d1kxm6e5dd0wlq33vi2nx5zzi"></img>
          <div className='div-join-sub2 '>
            <h3 className='' style={{ textAlign: "start" }}>“Aqar Jobs helped me hire the best person to grow my business.”

              Gavin McKenzie</h3>
            <div className=''>
              <p style={{ textAlign: "start", margin: "2px" }}>Gavin McKenzie</p>
              <p style={{ textAlign: "start", margin: "0px" }} className=''>CEO, Build McKenzie</p>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}
