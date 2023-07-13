import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

const EditContent = () => {
  const { title } = useParams();
  const { products } = useSelector((state) => state.products);
  const product = products.find((item) => item.title == title);
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
        </Col>
        <Col>
            <p className="save">Save</p>
        </Col>
      </Row>
    </Container>
  );
};

export default EditContent;
