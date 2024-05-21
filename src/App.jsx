import { Box, Button, Container, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import React from "react";
import Footer from "./Footer";
import UserList from "./UserList";
import ResponsiveAppBar from "./header";
import cardImage11 from "./image11.png";
import avatarImageURL1 from "./image6.png";
import cardImage66 from "./image66.png";
import cardImage88 from "./image88.png";
const BlurredCard = styled(Card)({
  backdropFilter: "blur(20px)",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
});

function ServiceCard({ title, description, avatar, customStyles }) {
  return (
    <BlurredCard
      sx={{
        maxWidth: 500,
        height: "46vh",
        width: "380px",
        border: "none",
        ...customStyles,
        borderRadius: "50px",
      }}
    >
      <CardContent>
        <Avatar alt={title} src={avatar} sx={{ width: 100, height: 100, margin: "0 auto", marginBottom: 2 }} />
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </BlurredCard>
  );
}

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Container maxWidth="xl" sx={{ bgcolor: "#32127A" }}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justify="center"
          style={{ minHeight: "90vh", marginLeft: "5%" }}
        >
          <Grid item maxWidth={"42%"}>
            <Typography color={"#D946EF"} variant="h2" fontWeight={600}>
              Virtual reality <br /> Business solutions
            </Typography>
            <Typography sx={{ fontSize: "20px", color: "white" }} variant="body1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi maxime eveniet harum quibusdam.
            </Typography>
            <div style={{ marginTop: "5%", display: "flex", alignItems: "center", gap: "20px" }}>
              <Button
                variant="contained"
                style={{
                  height: "7vh",
                  width: "150px",
                  backgroundColor: "#D946EF",
                  color: "white",
                  borderRadius: "10px",
                  border: "none",
                  padding: "2px",
                  marginBottom: "10px",
                }}
              >
                Join us
              </Button>
              <Button
                style={{
                  height: "7vh",
                  width: "150px",
                  backgroundColor: "none",
                  color: "white",
                  borderRadius: "10px",
                  border: "none",
                  padding: "2px",
                  marginBottom: "10px",
                }}
              >
                Watch video
              </Button>
            </div>
          </Grid>
          <Grid item>
            <img src={cardImage11} alt="Your Image" style={{ width: "100%", height: "auto", maxHeight: "100%" }} />
          </Grid>
        </Grid>

        <Box sx={{ padding: "5%", textAlign: "center", maxWidth: "xl" }}>
          <Typography variant="h2" color={"white"} fontWeight={600}>
            Our Services
          </Typography>
          <Typography
            sx={{ fontSize: "20px", maxWidth: "700px", margin: "0 auto", marginTop: "20px", color: "white" }}
            variant="body1"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi maxime eveniet harum quibusdam a
            laudantium.
          </Typography>
          <Grid container spacing={4} sx={{ marginTop: "70px", maxWidth: "xl", margin: "0 auto" }}>
            <Grid item xs={12} sm={6} md={4}>
              <ServiceCard
                title="Order Management"
                description="Commodi maxime eveniet harum quibusdam a laudantium minus Commodi maxime eveniet harum quibusdam a laudantium minus"
                avatar={avatarImageURL1}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ServiceCard
                title="Order Management"
                description="Commodi maxime eveniet harum quibusdam a laudantium minus Commodi maxime eveniet harum quibusdam a laudantium minus"
                avatar={avatarImageURL1}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ServiceCard
                title="Get your house cleaner"
                description="This is a description for service three."
                avatar={avatarImageURL1}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ServiceCard
                title="Schedule Online"
                description="Commodi maxime eveniet harum quibusdam a laudantium minus"
                avatar={avatarImageURL1}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ServiceCard
                title="Pay online easily"
                description="This is a description for service two."
                avatar={avatarImageURL1}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ServiceCard title="Get your house cleaner" avatar={avatarImageURL1} />
            </Grid>
          </Grid>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5%",
              gap: "20px",
            }}
          ></div>
        </Box>

        <Box>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justify="center"
            style={{ minHeight: "90vh", marginLeft: "5%" }}
          >
            <Grid item>
              <img src={cardImage88} alt="Your Image" style={{ width: "100%", height: "auto", maxHeight: "100%" }} />
            </Grid>
            <Grid item maxWidth={"50%"} sx={{ color: "white" }}>
              <Typography variant="h2" fontWeight={600}>
                We complete every <br /> extra cares as a customer need
              </Typography>
              <Typography sx={{ fontSize: "20px" }} variant="body1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi maxime eveniet harum quibusdam a
                laudantium minus dolorum cumque omnis consectetur? Commodi maxime eveniet
              </Typography>

              <div
                style={{
                  marginTop: "5%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    gap: "20px",
                    fontWeight: 600,
                  }}
                ></div>

                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <Button
                    variant="contained"
                    style={{
                      height: "7vh",
                      width: "150px",
                      backgroundColor: "#007FFF",
                      color: "white",
                      borderRadius: "10px",
                      border: "none",
                      padding: "2px",
                      marginBottom: "10px",
                    }}
                  >
                    Read more
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justify="center"
            style={{ minHeight: "90vh", marginLeft: "5%" }}
          >
            <Grid item maxWidth={"50%"} sx={{ color: "white" }}>
              <Typography variant="h2" fontWeight={600}>
                We complete every <br /> extra cares as a customer need
              </Typography>
              <Typography sx={{ fontSize: "20px" }} variant="body1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi maxime eveniet harum quibusdam a
                laudantium minus dolorum cumque omnis consectetur? Commodi maxime eveniet
              </Typography>

              <div
                style={{
                  marginTop: "5%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    gap: "20px",
                    fontWeight: 600,
                  }}
                ></div>

                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <Button
                    variant="contained"
                    style={{
                      height: "7vh",
                      width: "150px",
                      backgroundColor: "#007FFF",
                      color: "white",
                      borderRadius: "10px",
                      border: "none",
                      padding: "2px",
                      marginBottom: "10px",
                    }}
                  >
                    Read more
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid item>
              <img src={cardImage66} alt="Your Image" style={{ width: "100%", height: "auto", maxHeight: "100%" }} />
            </Grid>
          </Grid>
        </Box>
        <UserList />
      </Container>
      <Footer />
    </>
  );
}

export default App;
