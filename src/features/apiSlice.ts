import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://content.guardianapis.com/search?page-size=3&&section=sport&&show-fields=all&show-refinements&api-key=2aefd7e8-067e-4f3e-a964-f150376362c4`,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (sortBy) =>
        `https://content.guardianapis.com/search?page-size=6&&section=sport&&order-by=${sortBy}&&show-fields=all&show-refinements&api-key=2aefd7e8-067e-4f3e-a964-f150376362c4`,
    }),
    getPost: builder.query({
      query: (id) =>
        `https://content.guardianapis.com/${id}?api-key=2aefd7e8-067e-4f3e-a964-f150376362c4&show-fields=all`,
    }),
    getNews: builder.query({
      query: (sortBy) =>
        `https://content.guardianapis.com/search?page-size=9&&section=news&&order-by=${sortBy}&&show-fields=all&show-refinements&api-key=2aefd7e8-067e-4f3e-a964-f150376362c4`,
    }),
    searchPosts: builder.query({
      query: (searchTerm) =>
        `https://content.guardianapis.com/search?page-size=9&order-by=relevance&show-fields=all&q=${searchTerm}&&api-key=2aefd7e8-067e-4f3e-a964-f150376362c4`,
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useGetNewsQuery,
  useSearchPostsQuery,
} = postsApi;
