import './jobselected.css';
import Jobdetails from "./JobDetails";
import { useEffect, useState } from 'react';
import ApplyForm from './ApplyForm';
import * as Ads from "../../network/api/ad"
import * as Applicant from "../../network/api/applicant"
import * as Freelancer from "../../network/api/freelance"
import { useParams } from 'react-router-dom';

function JobSaved() {
    const [apply, setApply] = useState(false);

    let { id } = useParams()

    const [ad, setAd] = useState({})
    const [company, setCompany] = useState({})
    const [numberOfApplicant, setNumberOfApplicant] = useState(0)
    const [emails, setEmails] = useState([])
    const [profile, setProfile] = useState({})

    const getAd = async () => {
        await Ads.getAd(id).then(async (result) => {
            setAd(result.data.response)
            setCompany(result.data.company)
        })
    }

    const getProfile = async () => {
        await Freelancer.getProfile().then(async (result) => {
            setProfile(result.data.response)
        })
    }

    const getNumberOfApplicants = async () => {
        await Applicant.getNumberOfApplicants(id).then(async (result) => {
            setNumberOfApplicant(result.data.response.length)
            setEmails(result.data.response)
        })
    }

    useEffect(() => {
        getAd()
        getProfile()
        getNumberOfApplicants()
    }, [id])

    return (
        <div className="job-selected">
            <div className="d-flex" style={{ flexDirection: "column", alignItems: "center" }}>
                <Jobdetails setApply={setApply} ad={ad} company={company} numberOfApplicant={numberOfApplicant} isApply={emails?.includes(profile?.email)} profile={profile} />
            </div>
            {apply && <ApplyForm setApply={setApply} ad={ad} profile={profile} />}
        </div>
    )
}
export default JobSaved;