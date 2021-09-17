import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css';
import Header from './components/Header.jsx'
import HomePage from './pages/HomePage.jsx'
import Alert from './components/Alert.jsx'
import shipmentsLocal from './shipments.json'

function App() {
  const [shipments, setShipments] = useState(!!localStorage.getItem('shipments') ? JSON.parse(localStorage.getItem('shipments')) : null)
  const [shipmentsFiltred, setShipmentsFiltred] = useState(null)
  const [keyword, setKeyword] = useState('')

  const handleLoadShipments = () => {
    setShipments(shipmentsLocal)
    setShipmentsFiltred(shipmentsLocal)
    localStorage.setItem('shipments', JSON.stringify(shipmentsLocal))
  }

  const handleSaveShipments = () => {
    localStorage.setItem('shipments', JSON.stringify(shipments))
  }

  const handleSearch = (keyword) => {
    setKeyword(keyword)
    const shipmentsFiltred = shipments.filter(el => el.name.toLowerCase().includes(keyword.toLowerCase()))
    setShipmentsFiltred(shipmentsFiltred)
  }

  const handleChangeBoxes = (customBoxes, shipmentId) => {
      const shipmentsShanged = shipments.map(shipment => {
        if (shipment.id === shipmentId) {
          shipment.boxes = customBoxes
        }
        return shipment
      })
      
      setShipments(shipmentsShanged)
  }
  

  return (
    <Router>
      {shipments === null ? <Alert /> : <></>}
      <Header 
        keyword={keyword}
        search={handleSearch}
        loadShipments={handleLoadShipments}
        saveShipments={handleSaveShipments}/>
      <HomePage 
        changeBoxes={handleChangeBoxes}
        shipments={shipmentsFiltred !== null ? shipmentsFiltred : shipments} />
    </Router>
  );
}

export default App;
