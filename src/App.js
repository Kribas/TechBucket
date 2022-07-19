import './App.css';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import HardwareAndAppliances from './components/hardware-and-appliances/HardwareAndAppliances';
import DesignAndDevelopment from './components/design-and-development/DesignAndDevelopment';
import ManageEnterpriseSolutions from './components/manage-enterprise-solutions/ManageEnterpriseSolutions';
import Consulting from './components/hardware-and-appliances/consulting/Consulting';
import Services from './components/hardware-and-appliances/services/Services';
import Products from './components/hardware-and-appliances/products/Products';
import OurProjects from './components/design-and-development/our-projects/OurProjects';
import WebandApplication from './components/design-and-development/our-projects/WebandApplicationProjects';



function App() {
  return (
    <div className="app">
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/hardwareandappliances' element={<HardwareAndAppliances title="IT HARDWARE AND APPLIANCES"/>}/>
      <Route exact path='/designanddevelopment' element={<DesignAndDevelopment title="DESIGN AND DEVELOPMENT"/>} />
      <Route exact path='/manageenterprisesolutions' element={<ManageEnterpriseSolutions title="MANAGE ENTERPRISE SOLUTIONS"/>}/>
      <Route exact path='/hardwareandappliancesconsulting' element={<Consulting title="CONSULTING" pageNav="IT HARDWARE AND APPLIANCES" navPath="/hardwareandappliances"/>} />
      <Route exact path='/hardwareandappliancesservices' element={<Services title="SERVICES" pageNav="IT HARDWARE AND APPLIANCES" navPath = "/hardwareandappliances"/>} />
      <Route exact path="/products" element={<Products/>} />
      <Route exact path='/designanddevelopmentconsulting' element={<Consulting title="CONSULTING" pageNav = "DESIGN AND DEVELOPMENT" navPath="/designanddevelopment"/>} />
      <Route exact path="/designanddevelopmentservices" element={<Services title="SERVICES" pageNav="DESIGN AND DEVELOPMENT" navPath="/designanddevelopment" />} />
      <Route exact path="/ourprojects" element={<OurProjects/>} />
      <Route exact path="/webandapplication" element={<WebandApplication/>} />

    </Routes>
    </div>
  );
}

export default App;
