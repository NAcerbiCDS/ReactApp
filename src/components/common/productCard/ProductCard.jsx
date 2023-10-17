import { Center } from '@chakra-ui/react';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ item }) => {
    return (
        <Card sx={{ Width: 200, Height: 200 }}>
            <CardMedia
                sx={{
                    height: 400,
                    width: 200,
                    paddingLeft: '200px',
                    paddingRight: '200px',
                }}
                image={item.pictureUrl}
                title={`image ${item.title}`}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                </Typography>
                <Typography variant="p" color="text.secondary">
                    {item.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    $ {item.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/itemDetail/${item.id}`}>
                    <Button size="small" variant="outlined">
                        Ver detalle
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
