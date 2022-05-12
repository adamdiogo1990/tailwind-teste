import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Client from '../components/Client'
import Natureza from '../components/Natureza'
import Product from '../components/Product'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const [activeTab, setActiveTab] = useState('Product');
  const [activeModal, setActiveModal] = useState(false);

  const changeTab = (val: any) => {
    setActiveTab(val);
  }

  return (
    <div className="bg-gray-50">

      <section className="py-8 px-6 bg-white">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-auto flex items-center mb-4 lg:mb-0">
            <h2 className="text-2xl font-bold">Draft Contract</h2>
            <span className="inline-block py-1 px-2 ml-2 rounded-full text-xs text-white bg-indigo-500">56 Total</span>
          </div>
          <div className="w-full md:w-1/2 lg:w-auto flex py-2 px-4 mb-4 md:mb-0 md:mr-4 md:ml-auto border rounded bg-white">
            <input className="text-sm placeholder-gray-500" type="text" placeholder="Type to search..." />
            <button className="ml-auto">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.0921 16.9083L15.0004 13.8417C16.2005 12.3453 16.7817 10.4461 16.6244 8.53441C16.4672 6.62274 15.5835 4.84398 14.155 3.56386C12.7265 2.28375 10.8619 1.59958 8.94451 1.65205C7.02711 1.70452 5.20268 2.48963 3.84636 3.84594C2.49004 5.20226 1.70493 7.02669 1.65247 8.94409C1.6 10.8615 2.28416 12.7261 3.56428 14.1546C4.84439 15.583 6.62316 16.4668 8.53482 16.624C10.4465 16.7812 12.3457 16.2001 13.8421 15L16.9087 18.0667C16.9862 18.1448 17.0784 18.2068 17.1799 18.2491C17.2815 18.2914 17.3904 18.3132 17.5004 18.3132C17.6104 18.3132 17.7193 18.2914 17.8209 18.2491C17.9224 18.2068 18.0146 18.1448 18.0921 18.0667C18.2423 17.9113 18.3262 17.7036 18.3262 17.4875C18.3262 17.2714 18.2423 17.0637 18.0921 16.9083ZM9.16708 15C8.01335 15 6.88554 14.6579 5.92625 14.0169C4.96696 13.3759 4.21929 12.4649 3.77778 11.399C3.33627 10.3331 3.22075 9.16019 3.44583 8.02863C3.67091 6.89708 4.22648 5.85767 5.04229 5.04187C5.85809 4.22606 6.89749 3.67049 8.02905 3.44541C9.1606 3.22033 10.3335 3.33585 11.3994 3.77736C12.4653 4.21887 13.3763 4.96654 14.0173 5.92583C14.6583 6.88512 15.0004 8.01293 15.0004 9.16666C15.0004 10.7138 14.3858 12.1975 13.2919 13.2914C12.1979 14.3854 10.7142 15 9.16708 15Z" fill="#382CDD"></path>
              </svg>
            </button>
          </div>
          <a onClick={() => setActiveModal(true)} className="md:w-auto flex items-center py-2 px-4 rounded bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium" href="#">
            <span className="inline-block mr-1">
              <svg className="h-4 w-4 text-indigo-300" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6667 1.33334H3.33333C2.19999 1.33334 1.33333 2.20001 1.33333 3.33334V12.6667C1.33333 13.8 2.19999 14.6667 3.33333 14.6667H12.6667C13.8 14.6667 14.6667 13.8 14.6667 12.6667V3.33334C14.6667 2.20001 13.8 1.33334 12.6667 1.33334ZM10.6667 8.66668H8.66666V10.6667C8.66666 11.0667 8.4 11.3333 8 11.3333C7.6 11.3333 7.33333 11.0667 7.33333 10.6667V8.66668H5.33333C4.93333 8.66668 4.66666 8.40001 4.66666 8.00001C4.66666 7.60001 4.93333 7.33334 5.33333 7.33334H7.33333V5.33334C7.33333 4.93334 7.6 4.66668 8 4.66668C8.4 4.66668 8.66666 4.93334 8.66666 5.33334V7.33334H10.6667C11.0667 7.33334 11.3333 7.60001 11.3333 8.00001C11.3333 8.40001 11.0667 8.66668 10.6667 8.66668Z" fill="currentColor"></path>
              </svg>
            </span>
            <span>Nova Clausula</span>
          </a>
        </div>
      </section>

      <section className="py-8">
        <div className="container px-4 mx-auto">
          <div className="pt-6 bg-white shadow rounded">
            <div className="px-6 border-b">
              <div className="flex flex-wrap items-center mb-6">
                <h3 className="text-xl font-bold">Associations</h3>
              </div>
              <div>
                <a onClick={() => changeTab('Product')} className={`pointer inline-block px-4 pb-2 text-sm font-medium border-b-2  ${activeTab == 'Product' ? 'text-indigo-500 border-indigo-500' : 'border-transparent'}`}>Produto</a>
                <a onClick={() => changeTab('Natureza')} className={`pointer inline-block px-4 pb-2 text-sm font-medium border-b-2  ${activeTab == 'Natureza' ? 'text-indigo-500 border-indigo-500' : 'text-gray-500 border-transparent'}`}>Natureza</a>
                <a onClick={() => changeTab('Client')} className={`pointer inline-block px-4 pb-2 text-sm font-medium border-b-2  ${activeTab == 'Client' ? 'text-indigo-500 border-indigo-500' : 'text-gray-500 border-transparent'}`}>Cliente</a>
              </div>
            </div>
            <div className="overflow-x-auto">
              {
                activeTab == 'Product' && (
                  <Product></Product>
                )
              }

              {
                activeTab == 'Natureza' && (
                  <Natureza></Natureza>
                )
              }

              {
                activeTab == 'Client' && (
                  <Client></Client>
                )
              }
            </div>
          </div>
        </div>
      </section>

      <div
        className={`fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full ${activeModal ? '' : 'hidden'}`}
        id="my-modal"
      >
        <div
          className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white w-modal"
        >
          <div className="mt-3">

            <h3 className="text-lg leading-6 font-medium text-gray-900">Cadastrar Clausula</h3>
            <div>
              <form>
                <div className="relative z-0 w-full mb-6 group">
                  <input type="text" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer mt-10" placeholder=" " required />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Titulo</label>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                  <textarea rows={4} name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer mt-10" placeholder=" " required />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Texto</label>
                </div>
              </form>
            </div>

            <div className="items-center px-4 py-3">
              <button
                id="ok-btn"
                className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
              >
                Cadastrar
              </button>

              <button
                onClick={() => setActiveModal(false)}
                id="ok-btn"
                className="px-4 py-2 bg-gray-200 mt-1 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
