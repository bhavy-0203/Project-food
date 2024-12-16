import React, { useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap'; // Importing Bootstrap components
import { useNavigate } from 'react-router-dom'; // useNavigate for navigation

const products = [
  { id: 1, name: 'Veg Pizza', price: '$100', category: 'Veg', image: 'https://j6e2i8c9.rocketcdn.me/wp-content/uploads/2016/02/veggie-pizza-3-1.jpg' },
  { id: 2, name: 'Chicken Burger', price: '$195', category: 'Non-Veg', image: 'https://www.chicken.ca/wp-content/uploads/2017/09/Jalapeno-Popper-Chicken-Burgers-1-1180x580.jpg' },
  { id: 3, name: 'Pasta', price: '$112', category: 'Veg', image: 'https://skinnyspatula.com/wp-content/uploads/2022/01/Pink_Pasta_Sauce1.jpg' },
  { id: 4, name: 'Grilled Chicken', price: '$200', category: 'Non-Veg', image: 'https://kristineskitchenblog.com/wp-content/uploads/2023/05/grilled-chicken-recipe-25-500x500.jpg' },
  { id: 5, name: 'Veg Sandwich', price: '$180', category: 'Veg', image: 'https://www.indianveggiedelight.com/wp-content/uploads/2017/03/vegetable-mayonnaise-sandwich-featured-500x500.jpg' },
  { id: 6, name: 'Fish Curry', price: '$205', category: 'Non-Veg', image: 'https://stewwithsaba.com/wp-content/uploads/2024/05/IMG_4409-edited.jpg' },
  { id: 7, name: 'Veg Biryani', price: '$212', category: 'Veg', image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/04/veg-biryani-recipe-500x500.jpg' },
  { id: 8, name: 'Mutton Kebab', price: '$130', category: 'Non-Veg', image: 'https://foodiesterminal.com/wp-content/uploads/2019/04/Mutton-seekh-kabab-recipe-22.jpg' },
];

const Home = () => {
  const [cart, setCart] = useState([]); // State to store cart items
  const navigate = useNavigate(); // For navigation to cart page

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Our Foods</h1>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <Card className="shadow-sm">
              {/* Set custom width and height for images */}
              <Card.Img 
                variant="top" 
                src={product.image} 
                alt={product.name} 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }} // Custom width and height
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <strong>{product.price}</strong>
                </Card.Text>
                <Card.Text className="text-muted">{product.category}</Card.Text>
                <div className="d-flex justify-content-between">
                  <Button 
                    variant="outline-primary" 
                    size="sm" 
                    onClick={() => addToCart(product)} // Add product to cart
                  >
                    Add to Cart
                  </Button>
                  <Button variant="success" size="sm">
                    Buy Now
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Button 
        variant="info" 
        onClick={() => navigate('/cart', { state: { cart } })} // Pass cart state to /cart route
        className="mt-4"
      >
        View Cart ({cart.length})
      </Button>
    </div>
  );
};

export default Home;
