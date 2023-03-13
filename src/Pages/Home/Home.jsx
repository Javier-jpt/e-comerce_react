import React, { useContext } from 'react'
import Data from '../../database/data.json'
import Card from '../../Components/Card/Card';
import { UserContext } from '../../Context/Users/UserContext';

function Home () {

const { users } = Data

const { userData } = useContext(UserContext)

const { products } = Data;

   return (
    <div className="">

        <h1 className='Wellcome'>Wellcome to AnimeLandia: {userData.email} </h1>

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