//import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";

export const Places = () => {
  const [places, setPlaces] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  let key = "AIzaSyAB3BY_anb29pc19gFLjlM4ReUrcJijhsg";
  let cidade = "Aveiro";
  useEffect(() => {
    fetch(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cphotos&input=${cidade}&inputtype=textquery&key=${key}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.candidates[0].photos[0].photo_reference);
        //return data.candidates[0].photos[0].photo_reference;
      });

    return setPlaces([]);
  }, []);

  useEffect(() => {
    let reference =
      "Aap_uEBEdr4Mzvxp6W7yOx8pcBbaFA9mPxHjbN57-RxmXBYaBVlGx557KbYzwBmWKMY7ENeaq4ismJ9h4pFYexgHgvB7QheZL7LUXABqEVOph9jAw7EsCSlTTalNnl-fHD-60SCAEv7gJijDj_EtPxg3PaVdWzN2-hU4F-3LGoNx5BxK4EaE";
    fetch(
      `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxwidth=400&photo_reference=${reference}&key=${key}`
    )
      .then((response) => response.blob())
      .then((imageBlob) => {
        // Then create a local URL for that image and print it
        const imageObjectURL = URL.createObjectURL(imageBlob);
        console.log(imageObjectURL);
        setPlaces(imageObjectURL);
        setHasLoaded(true);
      });
  }, []);

  const result = () => {
    if (hasLoaded === true) {
      return (
        <div style={{ margin: 20 }}>
          <img alt=" om dia" src="{places}"></img>
        </div>
      );
    } else {
      let arr = [];
      return <p>{arr}</p>;
    }
  };
  return (
    <div style={{ margin: 20 }}>
      {/* {result()} */}
      <img alt="bom dia" src={places}></img>
    </div>
  );
};
