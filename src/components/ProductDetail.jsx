import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import { addToCard } from "../store/card";

const ProductDetail = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const handleaddToCart = () => {
    dispatch(
      addToCard({
        productId: id,
        count: count,
      })
    );
  };
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const { id } = useParams();
  const { products } = useSelector((state) => state.products);
  const product = products.find((item) => item.id == id);
  return (
    <Container>
      <Row xs={2}>
        <Col id="image-main">
          <img src={product.img} alt="" />
        </Col>
        <Col id="abs-detail">
          <h3>{product.title}</h3>
          <p className="price-detail">{product.price}</p>
          <h4 className="des-detail">{product.description}</h4>
          <Button onClick={increment}>+</Button>
          <span className="number">{count}</span>
          <Button onClick={decrement}>-</Button>
          <Col>
            <Button className="addtocart" onClick={handleaddToCart}>
              Add to cart
            </Button>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
