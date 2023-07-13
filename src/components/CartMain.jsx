import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Button, Container } from "reactstrap";


const CartMain = () => {
  const { carts } = useSelector((state) => state.carts);
  const { products } = useSelector((state) => state.products);

  let total = 0;

  // Tính toán tổng
  carts.forEach((item) => {
    const product = products.find((x) => x.id == item.productId);
    total += product.price * item.count;
  });
const deleProduct = () => {
  disth
}
  return (
    <>
      <Container>
        <h4>Total: {total}</h4>
        {carts.map((item, index) => {
          const product = products.find((x) => x.id == item.productId);
          return (
            <Row sx={2} key={index}>
              <Col>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbO9YBnfVbm9tGZMzPCOrqtvZ87VfLkUa3loNUIj1Wlg&s"
                  alt=""
                />
              </Col>
              <Col>
                <h4>{product.title}</h4>
                <p>{product.description}</p>
                <p>Count: {item.count}</p>
                <p>Price: {product.price}</p>
                <Button onClick={deleProduct}>Delete</Button>
              </Col>
            </Row>
          );
        })}
      </Container>
    </>
  );
};

export default CartMain;
