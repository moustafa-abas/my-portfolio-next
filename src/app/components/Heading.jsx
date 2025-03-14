import React from 'react'

const Heading = (data) => {
  return (
    <h1 className="text-5xl gradient font-bold mx-auto mb-24 uppercase" data-aos="zoom-in ">
    {data.name}
    </h1>
  )
}

export default Heading
