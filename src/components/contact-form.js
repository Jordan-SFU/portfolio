import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

function ContactForm() {
  const colors = ['#FF5959', '#59A1FF', '#70F801'];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_eprc4go', 'template_cgn2cbb', formData, 'vh4irZVxNkYXNTWQY')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully!');
      })
      .catch((error) => {
        console.log('FAILED...', error);
        alert('Failed to send email. Please try again later.');
      });
  };

  return (
    <Box sx={{
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
      backdropFilter: 'blur(3px)',
      brightness: '120%',
      padding: 5,
      borderRadius: 2,
      marginRight: '30vw'
    }}>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <motion.div whileHover={{ scale: 1.025 }}>
          <TextField
            id="outlined-name"
            label="Name"
            variant="outlined"
            fullWidth
            name="name"
            value={formData.name}
            onChange={handleChange}
            sx={{
              '& input': { color: 'gray' },
              '& label': { color: colors[0] },
              '& fieldset': { borderColor: colors[0] },
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': { borderColor: colors[0] },
                '&.Mui-focused input': { color: colors[0] },
                '&.Mui-focused .MuiInputLabel-root': { color: colors[0] },
                '&:hover fieldset': { borderColor: colors[0] },
                '&:hover input': { color: colors[0] }
              },
              '& .MuiInputLabel-root': {
                color: colors[0],
                '&.Mui-focused': { color: colors[0] }
              }
            }}
          />
        </motion.div>
        <div className="mb-4"></div>
        <motion.div whileHover={{ scale: 1.025 }}>
          <TextField
            id="outlined-email"
            label="Email"
            variant="outlined"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
            sx={{
              '& input': { color: 'gray' },
              '& label': { color: colors[1] },
              '& fieldset': { borderColor: colors[1] },
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': { borderColor: colors[1] },
                '&.Mui-focused input': { color: colors[1] },
                '&.Mui-focused .MuiInputLabel-root': { color: colors[1] },
                '&:hover fieldset': { borderColor: colors[1] },
                '&:hover input': { color: colors[1] }
              },
              '& .MuiInputLabel-root': {
                color: colors[1],
                '&.Mui-focused': { color: colors[1] }
              }
            }}
          />
        </motion.div>
        <div className="mb-4"></div>
        <motion.div whileHover={{ scale: 1.025 }}>
          <TextField
            id="outlined-message"
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            sx={{
              '& textarea': { color: 'gray' },
              '& label': { color: colors[2] },
              '& fieldset': { borderColor: colors[2] },
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': { borderColor: colors[2] },
                '&.Mui-focused textarea': { color: colors[2] },
                '&.Mui-focused .MuiInputLabel-root': { color: colors[2] },
                '&:hover fieldset': { borderColor: colors[2] },
                '&:hover textarea': { color: colors[2] }
              },
              '& .MuiInputLabel-root': {
                color: colors[2],
                '&.Mui-focused': { color: colors[2] }
              }
            }}
          />
        </motion.div>
        <div className="mb-4"></div>
        <Button 
          variant="contained" 
          type="submit"
          sx={{
            background: 'orange',
            color: 'white',
            '&:hover': {
              background: '#e68a00'
            }
          }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default ContactForm;
