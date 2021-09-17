const ShipmentDetail = (props) => {
    
    const shipment = props.shipmentSelected
    const shipmentCapacity = 10

    if (shipment === null) {
        return <div>Select Shipment</div>
    }

    const quantityBays = () => {
        const boxes = shipment.boxes.split(',').map(e => +e)
        const sumBoxes = boxes.reduce((sum, el) => sum+el)
        return Math.ceil(sumBoxes / shipmentCapacity)
    }

    return(
        <div className="card">
            <div className="card__title">
                <div className="title">{shipment.name}</div>
                <div className="subtitle">{shipment.email}</div>
            </div>
            { shipment.boxes !== null ?
                <div className="card__item">
                    <p>Number of required cargo bays <strong>{quantityBays()}</strong></p>
                    <div className="card__label">Cargo boxes</div>
                    <input type="text" value={shipment.boxes} onChange={(e)=> {props.changeBoxes(e.target.value, shipment.id)}} />
                    {/* <div className="card__box">{shipment.boxes}</div> */}
                </div>
                :
                <div className="card__item">
                    <h3>{shipment.name} doesn't have boxes</h3>
                </div>
            }
        </div>
    )
}

export default ShipmentDetail