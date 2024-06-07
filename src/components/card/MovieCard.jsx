import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import dayjs from "dayjs";


export default function MovieCard({data}) {

  return (

    <Card onClick={()=> window.open(``)} sx={{ maxWidth: 360 , }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.original_title || data.title || data.name || data.original_name}
        subheader={`Release Date:${dayjs(data.release_date).format(" MMM DD,YYYY")}`}
      />
      <CardMedia
        component="img"
        height="194"
        image={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data.overview}
        </Typography>
      </CardContent>
    </Card>
  );
}
