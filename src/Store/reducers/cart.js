import * as type from "../../Constants/actionType";

let data = JSON.parse(localStorage.getItem("cart"));

const initialState = data ? data : [];

export const cart = (state = initialState, action) => {
  let newArr = [...state];
  switch (action.type) {
    case type.ADD_TO_CART: {
      let maKhoaHoc = action.payload.maKhoaHoc;
      let index = newArr.findIndex((course) => course.maKhoaHoc === maKhoaHoc);

      if (index !== -1) {
        return newArr;
      }

      newArr = [...newArr, action.payload];

      localStorage.setItem("cart", JSON.stringify(newArr));
      return newArr;
    }
    case type.DELETE_CART: {
      let maKhoaHoc = action.payload;
      console.log(maKhoaHoc);
      let index = newArr.findIndex((course) => course.maKhoaHoc === maKhoaHoc);
      if (index !== -1) {
        newArr.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(newArr));
        return newArr;
      }
      return newArr;
    }
    default:
      return state;
  }
};
