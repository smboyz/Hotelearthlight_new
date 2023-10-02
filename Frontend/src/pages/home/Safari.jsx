import React from 'react'

const Safari = () => {
    return (
        <section className='py-10'>
            <div className="container flex flex-col items-center">
                <h2 className='text-2xl font-semibold mb-6 text-orange-500'>Jungle Safari</h2>
                <div className='flex md:flex-row flex-col gap-4'>
                    <div className='md:w-1/2 w-full'>
                        <img className='w-full lg:h-[300px] sm:h-[250px] h-[200px] object-cover' src="/src/assets/images/national-park.jpg" alt="national park" />
                    </div>
                    <div className='flex flex-col items-start my-auto md:w-1/2 w-full'>
                        <h3 className='text-xl font-bold border-b-2 border-orange-500 mb-1'>Chitwan National Park</h3>
                        <p className='text-gray-700 p-2 bg-gray-100 lg:text-base text-sm'>Chitwan National Park is a preserved area (932 Sq. Km) in the Terai Lowlands of south-central Nepal, known for its biodiversity. Its dense forests and grassy plains are home to rare mammals like one-horned rhinos and Bengal tigers, Sloth bead, Leopard, Crocodiles, etc. The park shelters numerous bird species, including the giant hornbill. It is listed as a World Heritage site since 1984. The park offers some breathtaking sights of a wide variety of flora and fauna.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Safari;
