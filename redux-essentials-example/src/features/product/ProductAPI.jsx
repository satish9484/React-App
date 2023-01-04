import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productAPI = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://202.131.117.92:7152/api" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/product",
      transformResponse: (res) => res.sort((a, b) => b._id - a._id),
      providesTags: ["Products"],
    }),

    getProductsPage: builder.query({
      query: (number) => `/product?page=${number}&limit=8&search=true`,
      transformResponse: (res) => res.sort((a, b) => b.prod_name - a.prod_name),
      providesTags: ["Products"],
    }),

    getProductByID: builder.query({
      query: (id) => `/product/${id}`,
      providesTags: ["Products"],
    }),

    addProduct: builder.mutation({
      query: (product) => ({
        url: "/product",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Products"],
    }),

    updateProduct: builder.mutation({
      query: (data) => ({
        url: `/product/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),

    deleteProduc: builder.mutation({
      query: (id) => ({
        url: `/product/remove/product`,
        method: "POST",
        body: id,
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIDQuery,
  useAddProductMutation,
  useDeleteProducMutation,
  useUpdateProductMutation,
  useGetProductsPageQuery,
} = productAPI;
