import axios from "axios";

export const fetchData = () => {
  // return axios.get(
  //   "http://39.106.167.126/masteradapter/api/ddl/property/collection?condition=1&washSecurity=0da0c2d95d2bb4a53d6668abd7367cde"
  // );
  return axios({
    method: "get",
    url: "http://39.106.167.126/masteradapter/api/ddl/property/collection?condition=1&washSecurity=0da0c2d95d2bb4a53d6668abd7367cde",
    data: {
      // name: this.form.name,
      // password: this.form.password,
    },
  });
};
