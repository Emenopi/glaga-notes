import React from 'react'
import Image from 'next/image'

export default function Header () {
    return (
        <div className = 'flex w-[95vw] justify-center p-4 pt-32 bg-[#0e0d15]'>
            <div>
            <Image src = '/glaga-header.png' alt = ''  quality = {100}
                    width = '1000'
                    height = '300'
                    className = 'w-[50vw]-ml-22 lg:-ml-24 lg:ml-4 mt-18 mr-5 pt-10 pb-20'/>
            </div>
        
        </div>
    )
}