import React, { useState } from 'react';


// HeroWidget.tsx

import dynamic from 'next/dynamic';





const HeroWidget = () => {


    return (
        <div className='widget-container text-white flex  md:w-3/4 w-3/4 font-[medium]'>
            {/* Column 1 */}
            <div className='column1 flex flex-col w-2/5  md:pr-2'>
                {/* Widget 1 in col 1 */}

                <div className='whats-widget-container text-white flex flex-col pt-5 px-5 mb-4 h-[427px]'>
                    <p className='pb-1 text-base text-pink-base3'>Find Your Travel Persona</p>
                    <p className='text-xl text-pink-base4 pb-11'>WHAT’S TOTALLY YOU?</p>
                    <div className='pb-7'>
                      
                    </div>
                    {/* card in Widget 1  */}
                    <div className='card bg-pink-base1 p-5 mb-8'>
                        <div className='flex mb-8'>
                            <img src='./assets/images/Group 31.svg' alt='Logo' />
                            <p className='ms-2.5'>Give me a book and a quiet beach, and I’m set for the day.</p>
                        </div>
                      
                        <div className='flex justify-between text-pink-base3'>
                            <p>Totally Disagree</p>
                            <p>Totally Agree</p>
                        </div>
                    </div>
                    {/* button in Widget */}
                    <div className='buttons flex justify-center mb-7'>
                        <button className='btn me-5'>Back</button>
                        <button className='btn'>Next</button>
                    </div>
                </div>
                {/* Widget 2 in col 1 */}
                <a href="" className='Article-widget text-white flex flex-col justify-center p-6 cursor-pointer h-32'>
                    <p className='pb-3.5 font-[medium]'>Jordan WIKI</p>
                    <div className='icon&text flex'>
                        <img src='./assets/images/Group 17.svg' alt='Logo' className='pe-6' />
                        <p className='font-[Light] '>New Article: Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
                    </div>
                </a>

            </div>

            {/* Column 2 */}
            <div className=' column2 flex flex-col md:w-1/2 ms-5'>
                {/* Widget 1 in col 2 */}
                <div className='Latest-Posts-widget text-white  flex flex-col justify-between h-56 mb-6'>
                    <div><p className='pt-5'>Latest Posts</p></div>
                    <div className='instagram-icon'>  <img src='./assets/images/Combined Shape.svg' alt='Logo' className='pe-6 inst ' /></div>

                </div>
                {/* Widget 2 in col 2 */}
                <div className='wether-Widget bg-beige-base1 text-white w-56 flex flex-col justify-between h-80 mb-5 pb-7 ps-7 text-base'>
                    <div className='city&temp pt-6'>
                        <p className=' pb-4'>Amman,Feb23</p>
                        <p className='text-7xl'>12°C</p>
                    </div>
                    <div className='flex flex-col'>
                        <div className='sun-icon'><img src='./assets/images/sunny.png' alt='Logo' className='pb-2.5' /></div>
                        <div className='flex flex-col'>
                            <div>Sunny</div>
                            <div> H: 30° L: 13°</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroWidget;
