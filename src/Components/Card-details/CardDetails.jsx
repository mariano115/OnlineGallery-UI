/* eslint-disable */
import React, { useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import "./CardDetails.css";

const CardDetails = (params) => {
    console.log(params)
  return (
    <Card sx={{ maxWidth: 300 }} className="cards-image">
      <CardMedia
        component="img"
        height="250"
        image={params.img}
        alt="green iguana"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {params.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {params.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardDetails;