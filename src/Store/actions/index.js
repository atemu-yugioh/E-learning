import * as type from "../../Constants/actionType";
import api from "../../Services/api";
import { notify } from "../../Components/Notify/Notify";

const localUser = JSON.parse(localStorage.getItem("user"))
  ? JSON.parse(localStorage.getItem("user"))
  : {};

export const getCourseRequest = () => {
  return (dispatch) => {
    api
      .get("QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01")
      .then((res) => {
        dispatch(getCourse(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getCourse = (courseData) => {
  return {
    type: type.GET_COURSES,
    payload: courseData,
  };
};

export const getUserRequest = () => {
  return (dispatch) => {
    api
      .get("QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01")
      .then((res) => {
        dispatch(getUser(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getUser = (userData) => {
  return {
    type: type.GET_USERS,
    payload: userData,
  };
};

export const setCurrentUser = (user) => {
  return {
    type: type.SET__CURRENT__USER,
    payload: user,
  };
};

export const signupRequest = (user, callback) => {
  api
    .post("/QuanLyNguoiDung/DangKy", user)
    .then((res) => {
      callback();
      notify("success", "Sign Up Successful");
    })
    .catch((err) => {
      notify("error", "Something went wrong!");
    });
};

export const signinRequest = (user, callback) => {
  api
    .post("QuanLyNguoiDung/DangNhap", user)
    .then((res) => {
      localStorage.setItem("user", JSON.stringify(res.data));
      callback(res.data);
      notify("success", "Sign In Successful");
    })
    .catch((err) => {
      notify("error", "Something went wrong!");
    });
};

export const getUserDetail = (taiKhoan, callback) => {
  api.defaults.headers.common["Authorization"] =
    "Bearer " + localUser.accessToken;
  api
    .post("QuanLyNguoiDung/ThongTinTaiKhoan", { taiKhoan })
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const displayCourses = (displayType) => {
  return {
    type: type.DISPLAY_COURSES,
    payload: displayType,
  };
};

export const searchCourses = (keyword) => {
  return {
    type: type.SEARCH_COURSES,
    payload: keyword,
  };
};

export const addToCart = (course) => {
  return {
    type: type.ADD_TO_CART,
    payload: course,
  };
};

export const deleteCart = (maKhoaHoc) => {
  return {
    type: type.DELETE_CART,
    payload: maKhoaHoc,
  };
};
