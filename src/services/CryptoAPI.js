import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const CryptoApiHeaders = {
  'x-rapidapi-host':'coinranking1.p.rapidapi.com',
  'x-rapidapi-key':'bbd7876effmsh6295e9459f7fa68p148a1ejsn38958f0cf2da'
}

const BaseURL = 'https://coinranking1.p.rapidapi.com';

const createReques = (url) => ({
  url,    // url : url
  headers: CryptoApiHeaders
});

export const CryptoAPI = createApi({
  reducerPath: 'CryptoAPI',
  baseQuery: fetchBaseQuery({baseUrl: BaseURL}),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createReques(`/coins?limit=${count}`)
    })
  })
})


export const {
  useGetCryptosQuery,   // redux created hook for me
} = CryptoAPI;
