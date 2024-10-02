import Card from "@mui/material/Card";
import "./tarjeta.css";
import { Button, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";


  const Tarjeta = ({ imagen, nombre, comentario }) => {
    return (
        <Card sx={{ maxWidth: 245 }}>
            <CardActionArea>
                <CardMedia component="img" height="140" image={imagen} alt={nombre} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {nombre}
                    </Typography>
                    {/* <Typography variant="body2" sx={{ color: "InfoText", fontSize: 10 }}>
                        {ingredients.join(', ')}
                    </Typography> */}
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </Card>
    );
}


export default Tarjeta;