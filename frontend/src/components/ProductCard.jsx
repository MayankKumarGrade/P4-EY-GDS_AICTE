import PropTypes from 'prop-types'; // Import PropTypes
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const ProductCard = ({ product }) => {
  const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: 345,
    margin: '16px',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
    },
    backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#fff',
    color: theme.palette.mode === 'dark' ? '#eee' : '#333',
  }));

  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="200"
        image={product.image} // Replace with actual product image URL
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" sx={{ mt: 1 }}>
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
        <Button size="small">View Details</Button>
      </CardActions>
    </StyledCard>
  );
};

// Prop Types Validation
ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
