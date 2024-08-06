import {Link} from 'react-router-dom'


function HomePage(){
    return (
    // <meta charset="UTF-8">
    // <meta name="viewport" content="width=device-width, initial-scale=1.0">
    // <title>Document</title>
    // <meta name="description" content="Get all your sports fishing equipment at One Place Fishing. Open Monday to Friday, 9 to 5, in the Great Lake area."/>
    // <meta name="og:title" content="One Place Fishing"/>
    // <meta name="og:description" content="some description here"/>
    // <meta name="og:image" content="logo.png"/>
    // <link rel="stylesheet" href="/src/css/style.css">
    <ul>
      <li>
        <Link to="/" className="nav-item">HomePage</Link>
        
      </li>
      <li>
        <Link to="/bookingpage" className="nav-item">BookingPage</Link>
      </li>
    </ul>
    )
}

export default HomePage;