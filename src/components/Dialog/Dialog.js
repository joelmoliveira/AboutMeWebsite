import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

const ContactFormDialog = ({ open, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission here
    // You can use the name, email, and message values to send the message
    // to the desired destination or trigger an API call
    console.log(name, email, message);

    // Clear form fields
    setName("");
    setEmail("");
    setMessage("");

    // Close the dialog
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Sed me a message</DialogTitle>
      <DialogContent>
        <TextField
          label="Your Name/Company"
          value={name}
          onChange={handleNameChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          value={email}
          onChange={handleEmailChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Message"
          value={message}
          onChange={handleMessageChange}
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} color="primary">
          Send
        </Button>
        <Button onClick={onClose} color="secondary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContactFormDialog;
