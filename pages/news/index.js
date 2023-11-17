import React from 'react'

export default function News({data}) {
    if(!data.id){
        return(
            <h1>Loading........</h1>
        )
    }
  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.email}</h1>
      <h1>NEWS</h1>
    </div>
  )
}

export async function getServerSideProps(){
    const response= await fetch('http://localhost:4000/products/2');
    const data= await response.json();

    return{
        props:{
            data
        }
    }
}
