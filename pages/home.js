import React from 'react'
import getBlurData from './utils/blur-data-generator';
import Image from 'next/image';
import Img from '../public/photo1.jpg'



export default async function home() {
   const imageUrl= "https://images.unsplash.com/photo-1698338956399-bf6a91f44de5?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
  const base64 = await getBlurData();
    //async function handleClick(){
    //    const data= await fetch("/api/hello");
    //    const dataDT= await data.json()
    //    console.log(dataDT);
    //}
  return (
    <div>
      <button >Click Me</button>
      <h1>Click Meeee</h1>
      <Image
      src={imageUrl}
      alt='Something Image'
      width={800}
      height={800}
      placeholder='blur'
      blurDataURL={base64}
      />
    </div>
  )
}
