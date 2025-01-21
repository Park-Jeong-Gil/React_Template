// products Mock api.
// https://fakeapi.platzi.com/en/about/introduction/

import { axiosInstanceProducts } from './axios';

// import axios from 'axios';

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

export const getProductsList = async (id: number): Promise<CartItemType[]> => {
  const { data } = await axiosInstanceProducts.get(`/products=${id}`);

  return data;
};

// interface products {
//   id: 4;
//   title: 'Handmade Fresh Table';
//   price: 687;
//   description: 'Andy shoes are designed to keeping in...';
//   category: {
//     id: 5;
//     name: 'Others';
//     image: 'https://placeimg.com/640/480/any?r=0.591926261873231';
//   };
//   images: [
//     'https://placeimg.com/640/480/any?r=0.9178516507833767',
//     'https://placeimg.com/640/480/any?r=0.9300320592588625',
//     'https://placeimg.com/640/480/any?r=0.8807778235430017',
//   ];
// }
