import React from 'react'
import Card from '../Card/Card'
import data from '../../Data'

function Main() {

  const carts = data.map(item => {
    return <Card {...item} />
  })
  
  return (
    <div>
      {carts}
    </div>
  )
}

export default Main