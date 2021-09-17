import { NavLink } from 'react-router-dom'


const Sidebar = (props) => {
    const shipments = props.shipments
    shipments.sort((a,b) => a.name < b.name ? -1 : 1)
    
    return(
        <ul className="list">
            {props.shipments.map(shipment => {
                return (
                    <NavLink key={shipment.id} to={`/shipment/${shipment.name.replace(/ /g,"_")}`}>
                        <li 
                            onClick={() => props.selectShipment(shipment)}
                            className="list__item">
                            {shipment.name}
                        </li>
                    </NavLink>
                )
            })}
        </ul>
    )
}
export default Sidebar