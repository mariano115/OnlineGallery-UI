/* eslint-disable */
import React, { useEffect } from "react";
import { getPhotos } from '../../Services/PhotoService';
import "./Home.css";
import Photo from "../../Components/Photo/Photo";
import axios from 'axios';
import MainLayout from "../../Layout/MainLayout";

const HomePage = () => {
  const [photos, setPhotos] = React.useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/photos")
      .then(res => {
        setPhotos(res.data)
      })

  }, [])

  return (
    <div>
      <div>
        <MainLayout />
      </div>
      <div className="homePage centered">
        {photos && photos.map((item, i) => (
          <div key={i}>
            <Photo id={item.id} title={item.title} url={item.url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;