import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
require('dotenv').config();

const newsHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
  'x-rapidapi-key': process.env.REACT_APP_API_SECURITY_KEY,
}

const baseURL = 'https://bing-news-search1.p.rapidapi.com'

const createReques = (url) => ({
  url,  // url : url 
  headers: newsHeaders
});

export const NewsAPI = createApi({
  reducerPath: 'NewsAPI',
  baseQuery: fetchBaseQuery({baseUrl: baseURL}),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({category, count}) => createReques(`/news/search?q=${category}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
    })
  })
})

export const {
  useGetNewsQuery,   // redux created hook for me
} = NewsAPI;