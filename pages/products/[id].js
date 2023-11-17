import { useRouter } from 'next/router'
import React from 'react'

export default function Post({data}) {
    console.log('DATA',data)
    const router = useRouter()

    if (router.isFallback) {
      return <div>Loading...</div>
    }

    return (
            <>
              <h2>
              {data.id} :- {data.name} 
              </h2>
              <h3>{data.email}</h3>
            </>
          )
}

export async function getStaticProps(context){
    const {params}= context;
    //const params2= params.postId.toString();
    console.log("PARAMS",params)
    //const {category}= params
    //const data= await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);

    const response = await fetch(`http://localhost:4000/products/${params.id}`);
    const data =  await response.json();

    console.log("DATTATTA", data)

    if (!data.id) {
        console.log("NOTNOTNOT")
        return {
          notFound: true
        }
      }

    return{
        props:{
            data
        },
        revalidate:10,
    }
}

export async function getStaticPaths(){
    return{
        paths:[
            {params:{id:'1'}},
            {params:{id:'2'}},
            {params:{id:'3'}},
            {params:{id:'4'}},
        ],
        fallback:true
    }
}


//import { useRouter } from 'next/router'

//function Post({ post }) {
//  const router = useRouter()

//  if (router.isFallback) {
//    return <div>Loading...</div>
//  }

//  return (
//    <>
//      <h2>
//        {post.id} {post.title}
//      </h2>
//      <p>{post.body}</p>
//    </>
//  )
//}

//export default Post

//export async function getStaticProps(context) {
//  const { params } = context
//  const response = await fetch(
//    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
//  )
//  const data = await response.json()

//  if (!data.id) {
//    return {
//      notFound: true
//    }
//  }

//  console.log(`Generating page for /posts/${params.postId}`)
//  return {
//    props: {
//      post: data
//    }
//  }
//}

//export async function getStaticPaths() {
//  return {
//    paths: [
//      { params: { postId: '1' } },
//      { params: { postId: '2' } },
//      { params: { postId: '3' } }
//    ],
//    fallback: true
//  }
//}

//import { useRouter } from 'next/router';
//import React from 'react'

//export default function Products({data}) {
//    const router = useRouter()
//    if (router.isFallback) {
//      return <div>Loading...</div>
//    }

//  return (
//    <div>
//    <p>{data.postId}</p>
//    <h1>{data.name}</h1>
//    <h2>{data.email}</h2>
//    </div>
//  )
//}

//export async function getStaticProps(context){
//    console.log("CONTEXT", context);
//    const {params}= context;
//    console.log("PARAMS", params)

//    const response= await fetch(`http://localhost:4000/products/${params.postId}`);
//    const data= await response.json();

//    if(!data.id){
//        return{
//            notFound:true
//        }
//    }

//    return{
//        props:{
//            data
//        }
//    }
//}


//export async function getStaticPaths(){
//    return{
//        paths:[
//            {params:{postId:'1'}},
//            {params:{postId:'2'}},
//            {params:{postId:'3'}},
//            {params:{postId:'4'}},
//        ],
//        fallback:true
//    }
//}
