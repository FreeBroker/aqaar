import { useState } from 'react';
import XIcon from '../Images/cancel.svg';
import Image from '../Images/crossover.jpeg';
import { BiSolidDownArrow } from 'react-icons/bi';
import { BsDownload } from 'react-icons/bs';
import * as Applicant from "../../network/api/applicant"

function ApplyForm(props) {
  const [phone, setPhone] = useState('');
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState('Upload Resume...');

  const submit = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("ad_id", props.ad?._id);
    formData.append("company_id", props.ad?.company_id);
    formData.append("name", props.profile?.name);
    formData.append("email", props.profile?.email);
    formData.append("phone", phone);
    formData.append("pdf", file);

    await Applicant.createApplicant(formData).then(async (result) => {
      window.location.reload(true)
    })
  }

  const handleFile = (event) => {
    setFile(event.target.files[0])
    setFileName(event.target.files[0].name);
  }

  return (
    <div className='apply-form '>
      <div className='bg-white ' style={{minWidth:"25rem"}}>
        <div className="head">
          <p>Apply to GOLD ERA</p>
          <img src={XIcon} onClick={() => props.setApply(false)} style={{ cursor: 'pointer' }} />
        </div>
        <div className='d-flex align-items-center px-2 my-4'>
          <img src={Image} width={60} height={60} className='align-self-start me-2' style={{ borderRadius: '50%' }} />
          <div className='d-flex flex-column'>
            <h2 className='m-0 ' style={{ fontSize: '22px' }}>{props.profile?.name}</h2>
            <p className='m-0 ' style={{ fontSize: '15px' }} >{props.profile?.email}</p>
          </div>
        </div>
        <form className='px-2' onSubmit={submit}>
          <div className='d-flex flex-column mt-4'>
            <label>Phone*</label>
            <input name='phone' type='number' value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className='d-flex flex-column mt-4'>
            <label>Resume*</label>
            <div className='d-flex justify-content-between align-items-center  pe-2 py-1 code-input'>
              <input name='file' value={fileName} readOnly />
              <label for='file' className='fs-4 px-2' style={{ cursor: 'pointer', fontWeight: '900' }}>
                <BsDownload /> </label>
            </div>
            <input
              type='file'
              name='file'
              id='file'
              accept=".pdf"
              onChange={handleFile}
              className='file-input'
            />
          </div>
          <div className='d-flex justify-content-end'>
            <input type='submit' className='submit' value='Submit application' />
          </div>
        </form>
      </div>
    </div>
  )
}
export default ApplyForm



