import React from 'react'
import MainNav from '../components/MainNav'


const Main = () => {
    return (
        <>
            <MainNav />

            <div className='flex items-center justify-between px-6 pb-5 pt-20'>
                <p className='font-semibold text-2xl'>welcome, (name of client)</p>
                <button className='bg-blue text-sm font-semibold text-white rounded-lg w-24 px-2 h-10'>Add Funds</button>
            </div>
            <div className='bg-light-blue px-6 pt-6 pb-32'>
                <p className='text-xl'>Overview</p>
                <div className='bg-white flex flex-col px-4 my-4 py-4 gap-3 text-gray-500'>
                    <p className='text-xl'>Wallet</p>
                    <p className='text-4xl'>₦0</p>
                </div>

                <div className='bg-white flex flex-col px-4 my-4 py-4 gap-3 text-gray-500'>
                    <p className='text-xl'>Transactions</p>
                    <p className='text-4xl'>0</p>
                </div>

                <p className='text-xl py-4'>Recent Wallet Funding</p>


                <div className='overflow-y-auto h-fit border border-gray-300 bg-white'>
                    <div className='flex font-semibold px-6 h-12 w-fit bg-gray-200 items-center gap-16'>
                        <p>Reference</p>
                        <p>Date</p>
                        <p>Amount</p>
                        <p className=''>Curr&nbsp;Bal</p>
                        <p>Prev&nbsp;Bal</p>
                        <p>Method</p>
                    </div>
                  <div className='h-24 w-fit'>

                  </div>
                  <div className='flex  h-12 w-full items-center gap-5 justify-end border-t border-gray-300'>
                        <p>Row per page:</p>
                        <p>5</p>
                        <p>1-0 of 0</p>
                  </div>

                </div>

            </div>


        </>
    )
}

export default Main