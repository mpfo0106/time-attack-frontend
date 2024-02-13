import { AxiosInstance } from "axios";

class BrandsAPI {
  private coreClient: AxiosInstance;

  constructor(coreClient: AxiosInstance) {
    this.coreClient = coreClient;
  }

  async getBrands() {
    const url = "/brands";

    const response = await this.coreClient.get(url);

    const data = response.data["result"];

    return data;
  }

  async getBrand(brandId: number) {
    const url = `/products/${brandId}`;
    const response = await this.coreClient.get(url);
    const data = response.data["result"];

    return data;
  }
}

export default BrandsAPI;
