import axiosClient from "./axiosClient";

const COURSES_API = "/courses";

const coursesApi = {
  getCourses: () => {
    const url = COURSES_API;
    return axiosClient.get(url);
  },
};

export default coursesApi;
