import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function photo(params) {
    console.log(params)
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="170"
                image={params.url}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {params.title}
                </Typography>
            </CardContent>
        </Card>
    )
}