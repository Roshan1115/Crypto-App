import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const CryptoApiHeaders = {
  'x-rapidapi-host':'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': process.env.REACT_APP_API_SECURITY_KEY,
}

const BaseURL = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({
  url,    // url : url
  headers: CryptoApiHeaders
});

export const CryptoAPI = createApi({
  reducerPath: 'CryptoAPI',
  baseQuery: fetchBaseQuery({baseUrl: BaseURL}),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`)
    }),
    getDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getHistory: builder.query({
      query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history/${timePeriod}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest('/exchanges')
    }),
  })
})


export const {
  useGetCryptosQuery,   // redux created hook for me
  useGetDetailsQuery,
  useGetHistoryQuery,
  useGetExchangesQuery,
} = CryptoAPI;
