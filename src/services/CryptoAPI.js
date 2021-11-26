import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const CryptoApiHeaders = {
  'x-rapidapi-host':'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'bbd7876effmsh6295e9459f7fa68p148a1ejsn38958f0cf2da',
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
  })
})


export const {
  useGetCryptosQuery,   // redux created hook for me
  useGetDetailsQuery,
  useGetHistoryQuery,
} = CryptoAPI;
