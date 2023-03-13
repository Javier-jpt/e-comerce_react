import React from 'react'
import Data from '../../database/data.json'
import Card from '../../Components/Card/Card';


function Home () {

const { products } = Data;

   return (
    <div className="containerHome">

        {products.map(({id,title,images,price}) => {
            return (
                <Card key={id} id={id} title={title} images={images} price={price} />
            )
        })
    }
    </div>
  )
}
export default Home;