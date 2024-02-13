import API from "@/api/index.api";

async function TrendingGoods() {
  const goods = await API.goods.getProducts();

  return <></>;
}

export default TrendingGoods;
