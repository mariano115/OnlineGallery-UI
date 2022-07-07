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
      <MainLayout />
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


/*
<Photo id={photos[0].id} title={photos[0].title} url={photos[0].url}/>
<Photo id={photos[1].id} title={photos[1].title} url={photos[1].url}/>
<Photo id={photos[2].id} title={photos[2].title} url={photos[2].url}/>*/
/*<Photo id={item.id} title={item.title} url={item.url}/>*/

/*const photos = [{
   id: 1,
   title: "first project",
   url: "https://img.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg?w=2000",
 },
 {
   id: 2,
   title: "second project",
   url: "https://img.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg?w=2000",
 },
 {
   id: 3,
   title: "third project",
   url: "https://img.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg?w=2000",
 }]*/



