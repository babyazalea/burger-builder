import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-1b7af-default-rtdb.firebaseio.com/",
});

export default instance;
