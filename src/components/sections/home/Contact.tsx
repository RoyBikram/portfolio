import Mail from "@/assets/common/mail.svg";
import Pin from "@/assets/common/map-pin.svg";
import Linkedin from "@/assets/contactspage/linkedin.png";
import Location from "@/assets/contactspage/location_img.png";
import Whatsapp from "@/assets/contactspage/whatsapp.png";
import Heading from "@/components/common/Heading";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

const Contact = () => {
  return (
    <Box>
      <Heading label='Contacts' />
      <Box sx={{ maxWidth: "1400px", mx: "auto" }}>
        <Box sx={{ mt: "50px", display: "flex", flexDirection: "column" }}>
          <Typography variant='title'>
            Hava a dream? <br /> Lets creaft it together.
          </Typography>
          <Typography variant='body'>
            Let's chat. Tell me about your project.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Box sx={{ width: "50%", display: "flex", gap: "20px" }}>
            <Box>
              <Typography variant='subtitle'>Location </Typography>
              <Image src={Location} alt='location' />
            </Box>
            <Box>
              <Typography variant='subtitle'>Quick Contacts</Typography>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Image src={Pin} alt='Pin' />
                <Typography variant='body'>Kolkata, India</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Image src={Mail} alt='Mail' />
                <Typography variant='body'>bikramroy5432@gmail.com</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: "50%" }}>
            <Typography variant='title'>
              Have any doubt? <br /> I will happy to clear.
            </Typography>
            <Box>
              <Button>
                <Image src={Whatsapp} alt='Whatsapp' />
                <Typography>Send Message</Typography>
              </Button>
              <Button>
                <Image src={Linkedin} alt='Linkedin' />
                <Typography>Send Message</Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
