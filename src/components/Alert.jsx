import { useState } from 'react'

const Alert = (props) => {
    const [showAlert, setShowAlert] = useState(true)
    
    const hideAlert = () => {
        setShowAlert(false)
        setTimeout(() => {
            props.hideAlert()
        }, 2000);
    }
    return (
        <div className="alert__wrap">
            <div className={!!showAlert ? "alert show" : "alert"}>
                <div className="alert__title">You don't have shipments</div>
                <div className="allert__body">If you want to download information about shipments from a local disk - click the "Load" button located at the top of the application</div>
                <div className="alert__ctrl">
                    <button
                        className="button"
                        onClick={()=> hideAlert()}>
                        OK
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Alert