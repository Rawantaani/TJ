import React from 'react'

const Hello = () => {
    return (
        <>
            <div className='hello-section flex flex-col text-white w-1/2 relative start-16 md:start-28 justify-center py-20'>
                <div className='title pb-7 text-white w-1/2 font-[Bold] text-3xl md:text-7xl'>Hello, Traveler!</div>
                <div className='subTitle text-white font-[Light] w-32 text-sm md:text-lg md:w-80 mb-44'>Discover Jordan’s wonders: A journey tailored just for you – totally yours, Totally Jordan.</div>
                <div className='aboutUS-button flex items-center pb-20'> 
                <div><button><img src='./assets/images/Group 6.svg' ></img></button></div>
                <div className='text-white font-[Medium]  ps-4 text-center text-xl'> ABOUT US</div>
                
                </div>
                
            </div>
        </>
    )
}

export default Hello

