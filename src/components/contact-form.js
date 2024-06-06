import { TextField, Button, Box } from "@mui/material";
import { motion } from "framer-motion";

function ContactForm() {
  const colors = ['#FF5959', '#59A1FF', '#70F801'];

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
      <form noValidate autoComplete="off">
        <motion.div whileHover={{ rotateZ: 1.1, scale: 1.05, paddingBottom: 10, paddingTop: 10 }}>
          <TextField
            id="outlined-name"
            label="Name"
            variant="outlined"
            fullWidth
            className="mb-4"
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
        <motion.div whileHover={{ rotateZ: 1.1, scale: 1.05, paddingBottom: 10, paddingTop: 10 }}>
          <TextField
            id="outlined-email"
            label="Email"
            variant="outlined"
            fullWidth
            className="mb-4"
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
        <motion.div whileHover={{ rotateZ: 1.1, scale: 1.05, paddingBottom: 10, paddingTop: 10 }}>
          <TextField
            id="outlined-message"
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            className="mb-4"
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
