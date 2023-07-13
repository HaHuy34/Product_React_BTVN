import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      img: "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/24/637786241649703917_chuwi-larkbook-n4120-den-dd-1.jpg",
      title: "CHUWI LarkBook Intel N4120",
      price: "320000",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bitlonger.",
      time: "17-02-2023",
    },
    {
      id: 2,
      img: "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/23/638151600474103309_masstel-e140-celeron-n4120-xam-dd.jpg",
      title: "Masstel E140 Celeron N4120 Win 10",
      price: "240000",
      description:
        "The first point I am impressed by this machine is that the design does not bring too many details but exudes a modern and elegant look",
      time: "05-02-2023",
    },
    {
      id: 3,
      img: "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/24/637786241650172882_chuwi-gemibook-pro-den-dd-1.jpg",
      title: "Galaxy Chromebook GO 14",
      price: "400000",
      description:
        "Specially designed earplugs ensure stable wearing in the ear, not afraid of falling, for good sound insulation.",
      time: "25-02-2023",
    },
    {
      id: 4,
      img: "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/6/30/638237298621164524_chuwi-gemibook-celeron-j4125-dd.jpg",
      title: "CHUWI GemiBook Celeron J4125",
      price: "300000",
      description:
        "Specially designed earplugs ensure stable wearing in the ear, not afraid of falling, for good sound insulation.",
      time: "12-02-2023",
    },
  ],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const id = state.products.length + 1;
      state.products.push({
        id,
        ...action.payload,
      });
    },
    deleteProduct: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter(
        (product) => product.id !== productId
      );
    },
    updateProduct: (state, action) => {
      const updatedProduct = action.payload;
      const index = state.products.findIndex(
        (product) => product.id === updatedProduct.id
      );
      if (index !== -1) {
        state.products[index] = updatedProduct;
      }
    },
    removeItemProduct: (state, action) => {
      const productId = action.payload.productId;
      const newCart = state.carts.filter(
        (item) => item.productId != productId
      );
      state.carts = [...newCart]
    }
  },
});

export const { addProduct, deleteProduct, updateProduct, removeItemProduct } =
  productSlice.actions;
export default productSlice.reducer;
