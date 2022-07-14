/* eslint-disable */
import React, { useEffect } from "react";
import { getPhotos } from '../../Services/PhotoService';
import "./Home.css";
import Photo from "../../Components/Photo/Photo";
import axios from 'axios';
import ResponsiveLayout from "../../Layout/ResponsiveLayout/ResponsiveLayout";
import MainLayout from "../../Layout/MainLayout/MainLayout";

const HomePage = () => {
  const [photos, setPhotos] = React.useState(null);

  useEffect(() => {
    axios.get("https://online-gallery-core.herokuapp.com/api/v1/photos")
      .then(res => {
        setPhotos(res.data)
      })

  }, [])

  return (
    <div>
        <MainLayout/>
      <div className="responsive-layout-button">
        <ResponsiveLayout />
      </div>
      <div className="homePage centered">
        {photos && photos.map((item, i) => (
          <div key={i} >
            <Photo id={item.id} title={item.title} url={item.url}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;