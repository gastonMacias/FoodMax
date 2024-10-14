import Card from "@mui/material/Card";
import "./tarjeta.css";
import { Button, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from "react";
import ModalReceta from "../modalReceta/ModalReceta";



const Tarjeta = ({ imagen, nombre, comentario }) => {
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    const imageUrl = process.env.NODE_ENV === 'development'
        ? `/public${imagen}`  // Agregamos '/public' en local
        : `${import.meta.env.BASE_URL}${imagen}`;  // En producción

    return (
        <Card sx={{ maxWidth: 190, maxHeight: 250 }}>
            <CardActionArea>
                <CardMedia component="img" height="140" image={imageUrl} alt={nombre} />
                <CardContent>
                    <Typography gutterBottom variant="h7" component="div" textAlign={"center"} fontWeight={"bold"}>
                        {nombre}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "InfoText", fontSize: 10 }}>
                        {comentario}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Button size="small" color="success" onClick={handleOpen}>
                    Receta
                </Button>
                <IconButton color="success">
                    <FavoriteBorderIcon />
                </IconButton>
            </CardActions>

            <ModalReceta open={open} handleClose={handleClose} />
        </Card>
    );
}


export default Tarjeta;