import axios from "axios";

export default axios.create({
  baseURL: "https://leeflix-movie-api-production.up.railway.app",
  headers: { "ngrok-skip-browser-warning": "true" },
});