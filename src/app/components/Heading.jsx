import React from 'react'

const Heading = (data) => {
  return (
    <h1 className="text-5xl gradient font-bold mx-auto text-center mb-24 uppercase pt-20" data-aos="zoom-in ">
    {data.name}
    </h1>
  )
}

export default Heading
