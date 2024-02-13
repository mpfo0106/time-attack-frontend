import axios from "axios";
import ProductsAPI from "./products/goods.api";

const coreClient = axios.create({
  baseURL: "https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app ",
});

class API {
  static goods = new ProductsAPI(coreClient);
}

export default API;
