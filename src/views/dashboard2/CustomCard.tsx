import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useRouter } from 'next/router';

interface CustomCardProps {
  imageUrl: string;
  title: string;
  description: string;
  detailsPath: string;
  detailsText: string;
}

const CustomCard = ({ imageUrl, title,  detailsPath}: CustomCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(detailsPath);
  };

  return (
    <Card 
      onClick={handleClick}
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        boxShadow: 3,
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        sx={{
          height: 140,
          objectFit: 'contain',
          padding: 2,
          backgroundColor: (theme:any) => theme.palette.background.paper
        }}
        image={imageUrl}
        alt={title}
      />
      <CardContent 
        sx={{ 
          flexGrow: 1, 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'center',
          p: 3
        }}
      >
        <Typography variant="h6" component="div" align="center">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CustomCard;
