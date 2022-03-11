import Section from "./Section/Section"
import Title from "./Title/Title"
import Text from "./Text/Text"
import { StructuredText  } from "react-datocms"
import { useStaticElement } from '../tools/datoCmsTools'
import Modal from 'react-bootstrap/Modal'
import Button from "./Button/Button"
import { useState, useEffect } from "react"

const RegistrationFeedback = () => {
    const feedbackCode = (new URLSearchParams(window.location.search)).get('v') || null
    const id = (new URLSearchParams(window.location.search)).get('id') || null
    
    
    //const registrationId = Number(feedbackCode?.substring(1,feedbackCode?.length))
    
    const [registrationFeedbackCancel] = useStaticElement("registrationFeedbackCancel")
    const [registrationFeedbackTransaltion] = useStaticElement("registrationFeedbackTransaltion")
    const [registrationFeedbackWithoutTranslation] = useStaticElement("registrationFeedbackWithoutTranslation")
    const [registrationFeedbackError] = useStaticElement("registrationFeedbackError")

    const awsLampdaLink = "https://wy8qg2hpoh.execute-api.eu-west-1.amazonaws.com/default/iokRegistrationFeedback"
    
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
   

    const sendRegistrationFeedback = async () => {
        const res = await fetch(awsLampdaLink + "?v=" + feedbackCode + "&id=" + id )
        setError((await res.json())?.error)
       
        setSuccess(true)
    }

    useEffect(() => {
        if (feedbackCode) sendRegistrationFeedback()
    },[])

    if (!(feedbackCode)) return <></>

    const answerCategoryCode = (error) ? 3 : Number(feedbackCode)
    const data = [
        registrationFeedbackCancel,
        registrationFeedbackTransaltion,
        registrationFeedbackWithoutTranslation,
        registrationFeedbackError
    ][answerCategoryCode]

    return (
        <Modal show={success} onHide={() => {setSuccess(false)}} centered>
            <Modal.Header>
                <Modal.Title>{(error) ? "Hiba történt :(" : "Sikeres visszajelzés!"} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <StructuredText data={data} />
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={() => setSuccess(false)}>
                Bezárás
            </Button>
            </Modal.Footer>
        </Modal>
    )
    }



export default RegistrationFeedback