import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { combineReducers } from "@reduxjs/toolkit";
import bookmarkReducer from "./bookmark/bookmarkSlice";

const postsApiReducer = combineReducers({
  bookmark: bookmarkReducer,
  postsApi: (state={}) => state,
});

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://content.guardianapis.com/search?page-size=3&&section=sport&&show-fields=all&show-refinements&api-key=2a7c32de-f8f5-4b6b-90ca-f5cbbb6d4360`,
  }),

  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (sortBy, page = 1) =>
        `https://content.guardianapis.com/search?page=${page}&&page-size=20&&section=sport&&order-by=${sortBy}&&show-fields=all&show-refinements&api-key=2a7c32de-f8f5-4b6b-90ca-f5cbbb6d4360`,
    }),
    getPost: builder.query({
      query: (id) =>
        `https://content.guardianapis.com/${id}?api-key=2a7c32de-f8f5-4b6b-90ca-f5cbbb6d4360&show-fields=all`,
    }),
    getNews: builder.query({
      query: (sortBy) =>
        `https://content.guardianapis.com/search?page-size=9&&section=news&&order-by=${sortBy}&&show-fields=all&show-refinements&api-key=2a7c32de-f8f5-4b6b-90ca-f5cbbb6d4360`,
    }),
    searchPosts: builder.query({
      query: (searchTerm) =>
        `https://content.guardianapis.com/search?page-size=20&order-by=relevance&show-fields=all&q=${searchTerm}&&api-key=2a7c32de-f8f5-4b6b-90ca-f5cbbb6d4360`,
    }), 
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useGetNewsQuery,
  useSearchPostsQuery,
} = postsApi;
