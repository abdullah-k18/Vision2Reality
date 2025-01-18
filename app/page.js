"use client"

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

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
          height: "screen",
          borderBottomLeftRadius: "1000px",
          borderBottomRightRadius: "1000px",
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
          Vision2Reality helps you break down your dreams into actionable goals. Simply provide a prompt, and let the AI generate a clear set of goals to guide your task.
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
    </Box>
  );
}
