import {configureStore} from '@reduxjs/toolkit'
import {CryptoAPI} from '../services/CryptoAPI'

export default configureStore({
  reducer : {
    [CryptoAPI.reducerPath]: CryptoAPI.reducer,
  },
})