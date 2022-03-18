import axiosClient from "./axiosClient";

const COURSE_API = "/courses";

const courseApi = {
  getAllCourse: () => {
    const url = COURSE_API;
    return axiosClient.get(url);
  },
};

export default courseApi;
