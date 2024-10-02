import Card from "@mui/material/Card";
import "./tarjeta.css";
import { Button, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const Tarjeta = ({ imagen, nombre, comentario }) => {
    return (
        <Card sx={{ maxWidth: 190, maxHeight: 250 }}>
            <CardActionArea>
                <CardMedia component="img" height="140" image={imagen} alt={nombre} />
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
                <Button size="small" color="success">
                    Receta
                </Button>
                <IconButton color="success">
                    <FavoriteBorderIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}


export default Tarjeta;