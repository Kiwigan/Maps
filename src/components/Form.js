import {useState, useEffect} from "react";
import {reactLocalStorage} from 'reactjs-localstorage';
import useFetch from "./useFetch";
import Maps from "./Maps";




const Form = () => {
    //const { error, isPending, data: kiosks } = useFetch('http://localhost:8000/kiosk');
    const [logitude, setLogitude] = useState(parseFloat(reactLocalStorage.get('lat', 40)));
    const [attitude, setAttitude] = useState(parseFloat(reactLocalStorage.get('lng', -80)));
    //console.log(kiosks);
    /*
    for(let i = 0; i < kiosks.length; i++){
        console.log(kiosks[i]);
    }
    */
    /*
    kiosks.forEach((kiosk) => {
        console.log(kiosk);
    });
    */
    
    /*
    useEffect(() => {
        fetch('http://localhost:8000/kiosk')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setKiosks(data);
            console.log(kiosks);
        })
    }, [])*/
    //const { error, isPending, data: kiosks } = useFetch('http://localhost:8000/kiosk');

    const handleSubmit = (e) => {
        //e.preventDefault();  
        reactLocalStorage.set('lat', logitude);
        reactLocalStorage.set('lng', attitude);
      }

    return ( 
        
        <div>
            <Maps lat={parseFloat(reactLocalStorage.get('lat', 44))} lng={parseFloat(reactLocalStorage.get('lng', -80))}/>
            <div className="container my-3">
            <h1>Input your location</h1>
            <form onSubmit={handleSubmit}>
                <label className="col-form-label">Logitude</label>
                <input
                className="form-control"
                type="number"
                step="0.0001"
                value={logitude}
                onChange={(e) => setLogitude(e.target.value)}/>
                <label className="col-form-label">Latitude</label>
                <input
                className="form-control"
                type="number"
                step={0.0001}
                value={attitude}
                onChange={(e) => setAttitude(e.target.value)}/>
                <button className="btn btn-primary">Update Location</button>
            </form>
                <h2>Log:{logitude} Att:{attitude}</h2>
            </div>
            
        </div>
     );
}
 
export default Form;


