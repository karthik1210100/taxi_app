import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { Home } from './Components/Home/home';
import { Title } from './Components/Title/title';
import { Booking } from './Components/Booking/booking';
import { Service } from './Components/Service/service';
import { Fare } from './Components/Fare/fare';
import { Review } from './Components/Review/review';
import { Download } from './Components/Download/download';
import { Contact } from './Components/Contact/contact';
import { About } from './Components/About/about';

function App() {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
            />
<link 
  rel="stylesheet" 
  href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
/>

            <Title />
            <Booking />
            <Service />
            <Fare />
            <Review />
            <Download />
            <Contact />
            <About />
        </>
    );
}

export default App;
