"use client"

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function Main() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSend = async () => {
    if (!input.trim()) {
      setError("Please enter a vision or goal.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: input }),
      });

      const data = await response.json();

      if (response.ok) {
        setTasks(data.tasks);
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ fontFamily: "'Roboto', sans-serif", minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <AppBar position="static" sx={{ background: "linear-gradient(to right, #3b82f6, #1e293b)" }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              fontFamily: "'Poppins', sans-serif",
              color: "#e2e8f0",
            }}
          >
            Vision2Reality
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="What is your vision or what do you want to achieve?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          sx={{ maxWidth: 600, mb: 2, mr: 2 }}
          size="small"
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#1e293b",
            color: "#fff",
            textTransform: "none",
          }}
          onClick={handleSend}
          disabled={loading}
        >
          {loading ? "Loading..." : "Send"}
        </Button>
      </Box>

      {error && <Typography sx={{ color: "red", mt: 2, textAlign: "center" }}>{error}</Typography>}

      <Box sx={{ mt: 4, maxWidth: 600, mx: "auto" }}>
        {tasks.length > 0 && (
          <>
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                fontWeight: 600,
                fontFamily: "'Poppins', sans-serif",
                color: "#1e293b",
              }}
            >
              Generated Tasks:
            </Typography>
            <ul>
              {tasks.map((task, index) => (
                <li key={index}>
                  {task.goals.map((goal, i) => (
                    <Typography
                      key={i}
                      variant="body1"
                      sx={{ color: "#475569", mb: 1, lineHeight: 1.6 }}
                    >
                      &#8226; {goal}
                    </Typography>
                  ))}
                </li>
              ))}
            </ul>
          </>
        )}
      </Box>
    </Box>
  );
}
