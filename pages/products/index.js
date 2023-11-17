import React from 'react'

export default function Products({data}) {
  return (
    <div>
     <ul>{
        data.map(x=><li key={String(x.id)}>{x.email}</li>)
        }</ul>
    </div>
  )
}

export async function getStaticProps(context){
    const response= await fetch('http://localhost:4000/products');
    const data= await response.json();

    return{
        props:{
            data
        }
    }
}