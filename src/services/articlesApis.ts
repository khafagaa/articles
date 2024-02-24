import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {NewsArticle, recievedData} from 'src/types/article.type';
import {BASE_URL, API_KEY} from '@config/env.json';
// Define a service using a base URL and expected endpoints
console.log(
  `eh ${`newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`}`,
);
export const articlesApis = createApi({
  reducerPath: 'articlesAPI',
  baseQuery: fetchBaseQuery({baseUrl: `${BASE_URL}`}),
  endpoints: builder => ({
    getArticle: builder.query<NewsArticle[], ''>({
      query: () => ({
        url: `newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`,
        method: 'GET',
      }),
      transformResponse: (data: recievedData): NewsArticle[] => data?.articles,
    }),
  }),
});

export const {useGetArticleQuery} = articlesApis;
