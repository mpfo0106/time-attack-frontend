export type Product = {
  id: number;
  name: string;
  imgSrc: string;
  onlineStock: number;
  price: number;
  originalPrice: number;
  deliveryType: string;
  brandId: number;
  brand: {
    id: number;
    nameKr: string;
    nameEn: string;
  };
};

//{"id":9587059,"name":"꼼데가르송 여성 더블하트 반팔티 더블와펜 여자 반팔 티셔츠","imgSrc":"https://i.balaan.io/images/bd/bdc4d5/bdc4d5d9222f13c24606847e52b71dbec501230108de4c6a59079debb65df037.jpg","onlineStock":200,"price":99200,"originalPrice":130000,"deliveryType":"당일배송","brandId":115,"brand":{"id":115,"nameKr":"꼼데가르송","nameEn":"COMME DES GARCONS"}}
