import { getPlaiceholder } from "plaiceholder";


export default async function getBlurData(){
try {
    const imageUrl= "https://images.unsplash.com/photo-1698338956399-bf6a91f44de5?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const buffer = await fetch(imageUrl).then(async (res) =>{
  console.log('RES_body',res.body);
    Buffer.from(await res.arrayBuffer())
});

  console.log("BUFFEREER", buffer);
  const { base64 } = await getPlaiceholder(file);
  console.log("BASE64", base64);
  return base64
 
} catch (err) {
  err;
}
}
