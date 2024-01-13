'use client'
import * as React from 'react';
import { MailOutline, NightsStayOutlined, NotificationsNoneOutlined } from '@mui/icons-material';
import { Box, Modal, Typography } from '@mui/material';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default async function header() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <header className='text-white w-full bg-slate-800 p-4 px-5 sticky top-0 z-10 rounded-r-lgX flex justify-between'>
        <div className="flex gap-3">
          
        </div>
        <div className='flex items-center gap-3'>
          <NightsStayOutlined />
          <MailOutline />
          <NotificationsNoneOutlined />
        </div>
       
    </header>
     <Modal
     open={open}
     onClose={handleClose}
     aria-labelledby="modal-modal-title"
     aria-describedby="modal-modal-description"
   >
     <Box sx={style}>
       <Typography id="modal-modal-title" variant="h6" component="h2">
         Text in a modal
       </Typography>
       <Typography id="modal-modal-description" sx={{ mt: 2 }}>
         Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
       </Typography>
     </Box>
   </Modal>
   </>
  );
}
