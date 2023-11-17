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
                {data.id} {data.title}
              </h2>
              <p>{data.body}</p>
            </>
          )
}

export async function getStaticProps(context){
    const {params}= context;
    console.log("PARAMS",params)
    //const {category}= params
    //const data= await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data =  await response.json();

    if (!data.id) {
        console.log("NOTNOTNOT")
        return {
          notFound: true
        }
      }

    return{
        props:{
            data
        }
    }
}

export async function getStaticPaths(){
    return{
        paths:[
            {params:{postId:'1'}},
            {params:{postId:'2'}},
            {params:{postId:'3'}},
            {params:{postId:'4'}},
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