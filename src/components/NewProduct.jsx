import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Container, Input, Label, Row } from "reactstrap";
import { addProduct } from "../store/product";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  const [product, setproduct] = useState({
    title: "",
    img: "",
    price: "",
    description: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSummitProduct = () => {
    dispatch(addProduct(product));
    navigate("/products");
  };
  return (
    <>
      <Container>
        <Row>
          <Col sm="2">
            <Label>Title</Label>
          </Col>
          <Col sm="10">
            <Input
              onChange={(e) =>
                setproduct({ ...product, title: e.target.value })
              }
            >
              Title
            </Input>
          </Col>
        </Row>
        <Row>
          <Col sm="2">
            <Label>Image (link)</Label>
          </Col>
          <Col sm="10">
            <Input
              onChange={(e) => setproduct({ ...product, img: e.target.value })}
            >
              img
            </Input>
          </Col>
        </Row>
        <Row>
          <Col sm="2">
            <Label>Price</Label>
          </Col>
          <Col sm="10">
            <Input
              type="number"
              onChange={(e) =>
                setproduct({ ...product, price: Number(e.target.value) })
              }
            >
              pr
            </Input>
          </Col>
        </Row>
        <Row>
          <Col sm="2">
            <Label>Dess</Label>
          </Col>
          <Col sm="10">
            <Input
              onChange={(e) =>
                setproduct({ ...product, description: e.target.value })
              }
            >
              des
            </Input>
          </Col>
        </Row>
      </Container>

      <div className="time-new">
        <p>Creation time </p>
        <p className="time-abs">
          <h2></h2>
          <Input
            type="date"
            onChange={(e) => setproduct({ ...product, time: e.target.value })}
          >
            des
          </Input>
        </p>
      </div>

      <Container>
        <Row>
          <Col id="add-card-new">
            <Button onClick={handleSummitProduct}>Submit</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NewProduct;
