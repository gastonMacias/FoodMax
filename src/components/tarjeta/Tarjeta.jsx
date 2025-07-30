import Card from "@mui/material/Card";
import "./tarjeta.css";
import { Button, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from "react";
import ModalReceta from "../modalReceta/ModalReceta";



const Tarjeta = ({ imagen, nombre }) => {
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    

    return (
        <>
            <div className="container__card">
                <figure className="figure__card">
                    <img src={imagen} alt={nombre} className="imagen__card" />
                    <figcaption className="titulo__card">{nombre}</figcaption>
                </figure>
                
                <div className="action__card">
                    <button className="button__card">Receta</button>
                    <FavoriteBorderIcon className="icon__card" />
                </div>
            </div>
        </>
    );
}


export default Tarjeta;


// <Card sx={{ maxWidth: 190, maxHeight: 250 }}>
//     <CardActionArea>
//         <CardMedia component="img" height="140" image={imageUrl} alt={nombre} />
//         <CardContent>
//             <Typography gutterBottom variant="h7" component="div" textAlign={"center"} fontWeight={"bold"}>
//                 {nombre}
//             </Typography>
//             <Typography variant="body2" sx={{ color: "InfoText", fontSize: 10 }}>
//                 {comentario}
//             </Typography>
//         </CardContent>
//     </CardActionArea>
//     <CardActions sx={{ justifyContent: 'center', alignItems: 'center' }}>
//         <Button size="small" color="success" onClick={handleOpen}>
//             Receta
//         </Button>
//         <IconButton color="success">
//             <FavoriteBorderIcon />
//         </IconButton>
//     </CardActions>

//     <ModalReceta open={open} handleClose={handleClose} />
// </Card>