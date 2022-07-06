import React, { useEffect } from "react";
import { getPhotos } from '../../Services/PhotoService';
import Photo from '../../Components/Photo';

export default function home(params) {
  /*const [photos, setPhotos] = React.useState([]);

  useEffect((e) => {
    //console.log(getPhotos())
    setPhotos(getPhotos())
    //.then(resp => console.log(resp))
  })*/
  const photos = [{
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
  }]


  return (
    <div className="forms">
      {photos.map((photo, i ) =>
        <Photo
          id={photo.id}
          title={photo.title}
          url={photo.url}
          key={i}
        />
      )}
      </div>
  );
}

/*<ImageList sx={{ width: 500, height: 450 }}>
          {photos.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={<span>by: {item.author}</span>}
                position="below"
              />
            </ImageListItem>
          ))}
          </ImageList>*/