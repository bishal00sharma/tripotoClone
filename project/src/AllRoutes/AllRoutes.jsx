import {Routes,Route} from "react-router-dom";
import Home from "./Home";
import TripPage from "./TripPage";
import Booking from "../Components/Booking";
export default function AllRoutes(){
    return(
      <div>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/travelpage/:id" element={ <TripPage />  }/>
            <Route path="/booking" element={ <Booking />  }/>
        </Routes>
      </div>
    )
}