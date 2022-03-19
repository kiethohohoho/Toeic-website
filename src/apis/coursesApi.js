import axiosClient from "./axiosClient";

const COURSES_API = "/courses";

const coursesApi = {
  getCourses: (params) => {
    const url = COURSES_API;
    return axiosClient.get(url, { params: params });
  },
};

export default coursesApi;
