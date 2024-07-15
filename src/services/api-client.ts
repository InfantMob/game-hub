import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f1a9d88423b7481bbf8d5cefae66bcd9",
  },
});
