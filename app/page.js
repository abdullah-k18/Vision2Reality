"use client"

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const features = [
    {
      title: "Goal Creation",
      description: "Provide a prompt, and the AI generates actionable goals for your task."
    },
    {
      title: "Goal Tracking",
      description: "Update your goals to monitor progress and stay on track."
    },
    {
      title: "Task Deletion",
      description: "Delete tasks once completed to keep your workspace organized."
    }
  ];

  return (
    <Box sx={{ fontFamily: "'Roboto', sans-serif", backgroundColor: "#f3f4f6", minHeight: "100vh" }}>
      <AppBar position="static" sx={{ background: "linear-gradient(to right, #3b82f6, #1e293b)" }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontWeight: 700, fontFamily: "'Poppins', sans-serif", color: "#e2e8f0" }}
          >
            Vision2Reality
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          textAlign: "center",
          py: 10,
          px: 2,
          background: "linear-gradient(to right, #3b82f6, #1e293b)",
          color: "#fff",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, fontFamily: "'Poppins', sans-serif", color: "#fff", mb: 3 }}
        >
          Transform Your Vision Into Reality
        </Typography>
        <Typography
          variant="h6"
          sx={{ mt: 2, maxWidth: "600px", mx: "auto", color: "#e2e8f0", lineHeight: 1.6 }}
        >
          Vision2Reality helps you break down your dreams into actionable steps. Generate, track, and complete your goals effortlessly.
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#fff",
            color: "#1e293b",
            textTransform: "none",
            fontWeight: 600,
            mt: 4,
            padding: "10px 20px",
            borderRadius: "25px",
            "&:hover": {
              backgroundColor: "#e2e8f0",
              color: "#1e293b",
            },
          }}
          onClick={() => router.push("/home")}
        >
          Get Started
        </Button>
      </Box>

      <Box
        sx={{
          py: 12,
          px: 4,
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mb: 6,
            fontWeight: 600,
            fontFamily: "'Poppins', sans-serif",
            color: "#1e293b",
          }}
        >
          Features
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  cursor: "pointer",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  borderRadius: 2,
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  "&:hover": {
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                    transform: "translateY(-10px)",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 600, fontFamily: "'Poppins', sans-serif", color: "#0f172a" }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ mt: 2, color: "#475569", lineHeight: 1.6 }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
