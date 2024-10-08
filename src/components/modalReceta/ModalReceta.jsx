import { Box, Typography, Modal } from "@mui/material";


const ModalReceta = ({ open, handleClose }) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    
    return <Modal open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>

            <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2">Titulo de la receta</Typography>

            <Typography
                id="modal-modal-description" sx={{ mt: 2 }}>aca va todo el desarrollo de la receta</Typography>
        </Box>
    </Modal>
}


export default ModalReceta;