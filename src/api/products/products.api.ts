import { AxiosInstance } from "axios";

class ProductsAPI {
  private coreClient: AxiosInstance;

  constructor(coreClient: AxiosInstance) {
    this.coreClient = coreClient;
  }

  async getProducts() {
    const url = "/products";

    const response = await this.coreClient.get(url);

    const data = response.data["result"];

    return data;
  }

  async getProduct(productId: number) {
    const url = `/products/${productId}`;
    const response = await this.coreClient.get(url);
    const data = response.data["result"];

    return data;
  }
}

export default ProductsAPI;
