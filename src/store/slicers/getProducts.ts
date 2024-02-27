import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ICard } from "../../components/Item/Item";

interface ISizes {
  size: string;
  available: true | false;
}

export interface IProduct {
  id: number;
  category: number;
  title: string;
  images: string[];
  sku: number;
  manufacturer: string;
  color: string;
  material: string;
  reason: string;
  season: string;
  heelSize: string;
  price: number;
  oldPrice: number;
  sizes: ISizes[];
}

export interface IOrder {
  id: number;
  count: number;
  price: number;
}

type TProductsResponse = IProduct[];

export const getProductsSlice = createApi({
  reducerPath: "getProducts",
  baseQuery: fetchBaseQuery({ baseUrl: "https://bosanoga.onrender.com" }),
  endpoints: (builder) => ({
    getTopSales: builder.query<TProductsResponse, void>({
      query: () => "/api/top-sales",
    }),
    getCatalog: builder.query<TProductsResponse, void | ICard[]>({
      query: () => "/api/items/",
    }),
    getCategories: builder.query<TProductsResponse, void>({
      query: () => "/api/categories",
    }),
    getCatalogByCategory: builder.query<TProductsResponse, number>({
      query: (idCategory: number) => `/api/items?categoryId=${idCategory}`,
    }),
    getAnotherByCategory: builder.query({
      query: ({ idCategory, offset }: { idCategory: number; offset: number }) =>
        `/api/items?categoryId=${idCategory}&offset=${offset}`,
    }),
    getAnotherCatalog: builder.query({
      query: (offset) => `/api/items?offset=${offset}`,
    }),
    getCatalogByText: builder.query({
      query: ({ inputText, idCategory, offset }) =>
        `/api/items?q=${inputText}&categoryId=${idCategory}&offset=${offset}`,
    }),
    getItemById: builder.query({
      query: (id) => `/api/items/${id}`,
    }),
    makeOrder: builder.mutation({
      query: (body) => ({
        url: "/api/order",
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body,
      }),
    }),
  }),
});

export const {
  useGetTopSalesQuery,
  useGetCatalogQuery,
  useGetCategoriesQuery,
  useGetCatalogByCategoryQuery,
  useLazyGetAnotherByCategoryQuery,
  useLazyGetAnotherCatalogQuery,
  useGetAnotherCatalogQuery,
  useGetAnotherByCategoryQuery,
  useLazyGetCatalogByTextQuery,
  useGetCatalogByTextQuery,
  useGetItemByIdQuery,
  useMakeOrderMutation,
} = getProductsSlice;
