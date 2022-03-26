import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CustomerForm from '~/components/CustomerForm'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50">
      <Head>
        <title>EverGreen - Clientes</title>
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-start py-20 px-20">
        <div className="py-20">
          <Image src="/evergreen.png" width={154} height={49} />
        </div>
        <CustomerForm />
      </main>
    </div>
  )
}

export default Home
