import React from 'react'

const Heading = (data) => {
  return (
    <h1 className="text-4xl sm:text-5xl gradient font-bold mx-auto text-center sm:mb-24 mb-10 uppercase sm:pt-20 pt-5 " data-aos="zoom-in ">
    {data.name}
    </h1>
  )
}

export default Heading
