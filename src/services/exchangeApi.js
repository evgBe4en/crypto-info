import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoExchangeHeaders = {
    'X-RapidAPI-Key': 'a69c702551mshc647e280e010330p1d05d7jsnbd37c625f70c',
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
}

const baseUrl = 'https://coingecko.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoExchangeHeaders })

export const cryptoExchangeApi = createApi({
    reducerPath: 'cryptoExchangeApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoExchange: builder.query({
            query: () => createRequest('/exchanges')
        })
    })
})

export const {
    useGetCryptoExchangeQuery,
} = cryptoExchangeApi