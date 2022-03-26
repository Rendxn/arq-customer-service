import { Customer } from '~/models/Customer'
import api from '../fetch'

export const createOneCustomer = async (data: Customer) => {
  api('/clients', {
    method: 'POST',
    body: {
      ...data,
    },
  })
}
