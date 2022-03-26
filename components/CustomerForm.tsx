import React from 'react'
import { useForm } from 'react-hook-form'
import { createOneCustomer } from '~/lib/collections/customers'
import { Customer } from '~/models/Customer'

interface IProps {}

interface IFormFields {
  nit: string
  name: string
  direccion: string // BRUH
}

const CustomerForm: React.FC<IProps> = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormFields>()

  const onCustomerCreate = async (data: Customer) => {
    try {
      const customer = await createOneCustomer(data)
      console.log('Creado satisfactoriamente: ', customer)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="rounded-sm bg-white p-8 shadow-md">
      <form
        onSubmit={handleSubmit(onCustomerCreate)}
        className="flex flex-col gap-6"
      >
        <div className="flex justify-between gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-green-800"
            >
              Nombre
            </label>
            <div className="mt-1 rounded-md border border-gray-300 shadow-sm">
              <input
                {...register('name', { required: true })}
                className="block w-full rounded-md border-gray-300 py-2 px-4 focus:border-green-600 focus:ring-green-600 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="nit"
              className="block text-sm font-medium text-green-800"
            >
              NIT
            </label>
            <div className="mt-1 rounded-md border border-gray-300 shadow-sm">
              <input
                {...register('nit', { required: true })}
                className="block w-full rounded-md border-gray-300 py-2 px-4 focus:border-green-600 focus:ring-green-600 sm:text-sm"
              />
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="direccion"
            className="block text-sm font-medium text-green-800"
          >
            Dirección
          </label>
          <div className="mt-1 rounded-md border border-gray-300 shadow-sm">
            <input
              {...register('direccion', { required: true })}
              className="block w-full rounded-md border-gray-300 py-2 px-4 focus:border-green-600 focus:ring-green-600 sm:text-sm"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full rounded-sm bg-green-800 px-4 py-2 text-white hover:bg-green-700"
        >
          Crear cliente
        </button>
      </form>
    </div>
  )
}

export default CustomerForm
