import axiosClient from "./axiosClient";

const COURSES_API = "/courses";

const coursesApi = {
  getCourses: (params) => {
    const url = COURSES_API;
    return axiosClient.get(url, { params: params });
  },
  getCoursesId: (id) => {
    const url = COURSES_API + `/${id}`;
    return axiosClient.get(url);
  },
};

export default coursesApi;
