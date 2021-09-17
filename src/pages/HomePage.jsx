import {useState} from 'react'
import { Route } from "react-router-dom";

import Sidebar from '../components/Sidebar'
import ShipmentDetail from '../components/ShipmentDetail'

const HomePage = (props) => {
    const [shipmentSelected, setShipmentSelected] = useState(null)
    const shipments = props.shipments

    const handleSelectShipment = (shipment) => {
        setShipmentSelected(shipment)
    }


    return(
        <div className="container">
            {shipments !== null ? 
                <>
                    <div className="flex sidebar">
                        <Sidebar selectShipment={handleSelectShipment} shipments={shipments} />
                    </div>
                    <div className="flex shipment">
                        <Route path="/shipment">
                            <ShipmentDetail 
                                changeBoxes={props.changeBoxes} shipmentSelected={shipmentSelected}/>
                        </Route>
                    </div>
                </>
                : 
                <div>You need load shipments</div>
            }
            
        </div>
    )
}
export default HomePage