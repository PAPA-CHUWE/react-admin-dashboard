import React from "react";

function Map({ latitude, longitude }) {
  
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3798.5019575496963!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDQ4JzU0LjMiUyAzMcKwMDInNTguMiJF!5e0!3m2!1sen!2szw!4v1693385433009!5m2!1sen!2szw`;

  // const apiKey = "AIzaSyDUWB2vRxJmzufqsst12-5EANvOZygFPZI"; // Replace with your actual API key
  // const mapUrl = `https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${latitude},${longitude}&zoom=15`;

  return (
    // eslint-disable-next-line
    <iframe
    src={mapUrl}
      width="100%"
      height="89%"
      frameBorder="0"
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default Map;
