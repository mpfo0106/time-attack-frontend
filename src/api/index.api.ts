import axios from "axios";
import AuthAPI from "./auth/auth.api";
import BrandsAPI from "./brands/brands.api";
import ProductsAPI from "./products/products.api";

const coreClient = axios.create({
  baseURL: "https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app",
  withCredentials: true,
});

class API {
  static products = new ProductsAPI(coreClient);
  static brands = new BrandsAPI(coreClient);
  static auth = new AuthAPI(coreClient);
}

export default API;
