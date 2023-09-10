import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
// import BackgroundImage from './background-image.jpg'; // Replace with the path to your background image
import BackgroundImage from '../public/images/team.jpg'
const AboutPage = () => {
  const backgroundStyles = {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
  };

  return (
    <div style={backgroundStyles}>
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
        <Container maxWidth="lg" py={6}>
          <Typography variant="h3" component="h1" align="center" color="primary" gutterBottom>
            About Rental Doctors
          </Typography>
          <Typography variant="body1" align="center" color="textPrimary" paragraph>
            Rental Doctors is not just any property management company. We pride ourselves on going above and beyond to provide you with a service that simplifies and enhances your residential investment experience. With a deep understanding of the local market, we offer a comprehensive property management solution tailored to your needs. Our team's extensive local knowledge empowers us to deliver exceptional service, making your investment journey more enjoyable and stress-free.
          </Typography>
          <Typography variant="h4" component="h2" align="center" color="primary" gutterBottom>
            Key Features
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Excellent Services with the lowest management fees" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Experienced dedicated Account manager" />
            </ListItem>
            <ListItem>
              <ListItemText primary="In-house maintenance team" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Transparent communication" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Legal expertise in Tribunal Representation" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Over 8 years of industry experience" />
            </ListItem>
          </List>
        </Container>
      </div>
    </div>
  );
};

export default AboutPage;
