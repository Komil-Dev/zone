import { Box, Container, Link, List, ListItem, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: "#f8f9fa", py: 5, borderTop: "1px solid #e9ecef" }}>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
          {/* About Section */}
          <Box flex={1} minWidth={250} my={2}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="textSecondary">
              We are dedicated to providing top-notch cleaning services for homes and businesses. Our team of
              experienced professionals is committed to ensuring your space is spotless and comfortable.
            </Typography>
          </Box>

          {/* Contact Section */}
          <Box flex={1} minWidth={250} my={2}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Have questions or need to schedule a service? Reach out to us!
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Phone:{" "}
              <Link href="tel:+1234567890" color="primary">
                +1 234 567 890
              </Link>
              <br />
              Email:{" "}
              <Link href="mailto:info@cleaningservice.com" color="primary">
                info@cleaningservice.com
              </Link>
            </Typography>
          </Box>

          {/* Services Section */}
          <Box flex={1} minWidth={250} my={2}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Our Services
            </Typography>
            <List>
              <ListItem disablePadding>Residential Cleaning</ListItem>
              <ListItem disablePadding>Commercial Cleaning</ListItem>
              <ListItem disablePadding>Carpet Cleaning</ListItem>
              <ListItem disablePadding>Window Cleaning</ListItem>
              <ListItem disablePadding>Special Event Cleaning</ListItem>
            </List>
          </Box>

          {/* Social Media Section */}
          <Box flex={1} minWidth={250} my={2}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Follow Us
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Stay connected with us on social media:
            </Typography>
            <Box>
              <Link href="https://facebook.com" color="primary" sx={{ mr: 2 }}>
                Facebook
              </Link>
              <Link href="https://twitter.com" color="primary" sx={{ mr: 2 }}>
                Twitter
              </Link>
              <Link href="https://instagram.com" color="primary" sx={{ mr: 2 }}>
                Instagram
              </Link>
              <Link href="https://linkedin.com" color="primary" sx={{ mr: 2 }}>
                LinkedIn
              </Link>
            </Box>
          </Box>
        </Box>

        <Box textAlign="center" color="textSecondary" py={3} borderTop="1px solid #e9ecef" mt={5}>
          &copy; 2024 Cleaning Service. All rights reserved.
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
