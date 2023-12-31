import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import {useState, useEffect} from "react";
import useFetch from "./useFetch";
import React from 'react';


//REQUIREMENT 2
//This was the attempt to place the 5 closest kiosk markers. Was not able to manipulate the JSON data as it comes out as null when running it through the forEach method

/*-------------------------------------------------------------------------------------------------------------------
async function Location(position){
    const { error, isPending, data: kiosks } = await useFetch('http://localhost:8000/kiosk');
    console.log(kiosks);
    let array = [];
    kiosks.forEach((kiosk) => {

        if(array.length != 5){
            array.push(kiosk);
        }
        else{
            for (let i = 0; i < array.length; i++){
                const dist1 =calculateDistance(position.lat, position.lng, array[i].latitude, array[i].logitude);
                const dist2 =calculateDistance(position.lat, position.lng, kiosk.latitude, kiosk.logitude);
                if (dist2 < dist1){
                    array.splice(i, 1);
                    array.push(kiosk);
                }
            }
        }

    });
    return(
        <div>
            {array.forEach((kiosk) => {
                const lat = kiosk.latitude;
                const lng= kiosk.longitude;
                <MarkerF position={{lat:lat, lng: lng}}/>
            })};
        </div>
    )
}

function calculateDistance(x1, y1, x2, y2){
    const distx = (x1) - (x2);
    const disty = (y1) - (y2);
    var dist = Math.power(Math.power(distx, 2) + Math.power(disty, 2), 0.5);
    return dist;

    
}
----------------------------------------------------------------------------------------*/


const Maps = (lat) => {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_MAPS_URL,
    });
    
    if(!isLoaded) return <div>Loading...</div>;
    return ( 
        <GoogleMap zoom={15} center={lat} mapContainerClassName='map-container'>
            <MarkerF position={lat} icon="https://img.icons8.com/plasticine/50/user-location.png"/>
        </GoogleMap>
     );
}
 
export default Maps;

/*
    { error && <div>{ error }</div> }
    { isPending && <div>Loading...</div> }
    {kiosk && kiosk.map(kiosk => (
        <div>
            <h3>Location of {kiosk.name}</h3>
            <h3>{kiosk.latitude}</h3>
            <h3>{kiosk.longitude}</h3>
        </div>
    ))}

    <Location position={lat}/>
*/
