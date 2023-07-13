import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Container,
  Input,
} from "reactstrap";
import { deleteProduct, updateProduct } from "../store/product";
import moment from "moment";
import { Controller, useForm } from "react-hook-form";

const ProductList = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [oldData, setOlddata] = useState();

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const deleteProductHandler = (productId) => {
    dispatch(deleteProduct(productId));
  };

  const filteredProducts = products.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const timeA = moment(a.time, "DD-MM-YYYY").toDate();
    const timeB = moment(b.time, "DD-MM-YYYY").toDate();
    return sortOrder === "asc" ? timeA - timeB : timeB - timeA;
  });

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: oldData?.title ?? "",
    },
  });

  const [currentImage, setCurrentImage] = useState("");

  const handleShow = (item) => {
    setOlddata(item);
    setCurrentImage(item.img);
    reset({
      title: item?.title ?? "",
      image: item?.img ?? "",
      price: item?.price ?? "",
      description: item?.description ?? "",
      time: item?.time ?? "",
    });
    setShow(true);
  };

  const onSubmit = (data) => {
    const updatedProduct = {
      id: oldData.id,
      ...data,
    };
    dispatch(updateProduct(updatedProduct));
    handleClose();
    setCurrentImage(data.image); // Set the current image to the updated image URL
  };

  return (
    <Container>
      <div className="bahs">
        <div className="main-card">
          <Button
            variant="secondary"
            onClick={() => navigate("/products/new-product")}
          >
            Add Product
          </Button>

          <Button
            variant="secondary"
            onClick={() => navigate("/products/maincart")}
            className="card"
          >
            Card
          </Button>
        </div>
        <Input
          id="input-search"
          label="Search"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Row xm="4">
        <div className="short">
          <select onChange={toggleSortOrder}>
            <option value="asc">Sort by Time (Ascending)</option>
            <option value="desc">Sort by Time (Descending)</option>
          </select>
        </div>
        {sortedProducts.map((item, key) => {
          return (
            <Col key={key} className="card-main">
              <Card style={{ width: "18rem" }}>
                <div className="header">
                  <p className="timeReald">{item.time}</p>
                  <i
                    className="bx bx-edit"
                    onClick={() => handleShow(item)}
                  ></i>

                  <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>Edit Products</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3">
                          <Form.Label>Title</Form.Label>

                          <Controller
                            control={control}
                            name="title"
                            rules={{
                              required: true,
                            }}
                            render={({ field }) => (
                              <Form.Control
                                {...field}
                                type="text"
                                placeholder="Name Title Product"
                              />
                            )}
                          />
                          {errors.title && <p>Ten SP khong duoc de trong!</p>}
                        </Form.Group>
                        <Form.Group className="mb-3" id="edit-pro-imag">
                          <div className="content-edit">
                            <Form.Label>Image</Form.Label>
                            <Controller
                              control={control}
                              name="image"
                              rules={{
                                required: true,
                              }}
                              render={({ field }) => (
                                <Form.Control
                                  {...field}
                                  placeholder="Link Image"
                                />
                              )}
                            />
                            {errors.image && <p>Image link is required!</p>}
                          </div>
                          <div className="img-edit">
                            {<img src={currentImage} alt="" />}
                          </div>
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Price</Form.Label>

                          <Controller
                            control={control}
                            name="price"
                            rules={{
                              required: true,
                            }}
                            render={({ field }) => (
                              <Form.Control
                                {...field}
                                type="number"
                                placeholder="Price Product"
                              />
                            )}
                          />
                          {errors.title && (
                            <p>Giá sản phẩm khong duoc de trong!</p>
                          )}
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Description</Form.Label>

                          <Controller
                            control={control}
                            name="description"
                            rules={{
                              required: true,
                            }}
                            render={({ field }) => (
                              <Form.Control
                                {...field}
                                placeholder="Description Product"
                              />
                            )}
                          />
                          {errors.title && (
                            <p>Thông tin sản phẩm khong duoc de trong!</p>
                          )}
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Time</Form.Label>

                          <Controller
                            control={control}
                            name="time"
                            rules={{
                              required: true,
                            }}
                            render={({ field }) => (
                              <Form.Control
                                {...field}
                                type="date"
                                placeholder="Time Creat Product"
                              />
                            )}
                          />
                          {errors.title && (
                            <p>Thông tin sản phẩm khong duoc de trong!</p>
                          )}
                        </Form.Group>
                        <Button variant="primary" type="submit">
                          Save
                        </Button>
                      </Form>
                    </Offcanvas.Body>
                  </Offcanvas>
                </div>
                <img alt="Sample" src={item.img} />
                <CardBody>
                  <CardTitle tag="h5">{item.title}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {item.price} VND
                  </CardSubtitle>
                  <CardText>{item.description}</CardText>
                  <Button
                    id="buy-now"
                    variant="danger"
                    onClick={() => navigate(`/products/${item.id}`)}
                  >
                    Buy Now
                  </Button>
                  <Button onClick={() => deleteProductHandler(item.id)}>
                    Delete
                  </Button>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProductList;
