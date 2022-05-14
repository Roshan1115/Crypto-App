import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// coinranking405a15fc54021e95846399ba65f7b2e4012265f0e18bb712

const CryptoApiHeaders = {

  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'bbd7876effmsh6295e9459f7fa68p148a1ejsn38958f0cf2da',
  // "x-rapidapi-host" : 'https://coinranking1.p.rapidapi.com/coins',
  // mode: 'no-cors',
  // 'x-access-token': 'coinranking405a15fc54021e95846399ba65f7b2e4012265f0e18bb712',
  
}

const BaseURL = 'https://coinranking1.p.rapidapi.com';
// const BaseURL = 'https://api.coinranking.com/v2';


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
