import { Center } from '@chakra-ui/react';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ item }) => {
    return (
        <Card className="card">
            <CardActionArea>
                <Link to={`/itemDetail/${item.id}`}>
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
                </Link>
            </CardActionArea>
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
