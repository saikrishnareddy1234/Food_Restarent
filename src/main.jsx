import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Counter from './functional_component/counter.jsx'
import Custom_navbar from './functional_component/custom_navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Scroll from './functional_component/scroll.jsx'
import Getproducts from './functional_component/fetch.jsx'
// let profile=[
//   {url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4swgDL7dd8ReIjNgjjRbjXe5FW_LI_j6Ul8nFTES8fw&s',post:'50 post',followers:'13.5M Followers',following:'100 Following'},
//   {url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5kJE7stFyv72imQHn2TDYc2gxmS4aG40FnIRxKHIF2Q&s=10',post:'30 post',followers:'6M Followers',following:'50 Following'},
//   {url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZq9wMD7--IexIL57xI-9xZUVmc2rbOac3cUGFpqFvw&s=10',post:'20 post',followers:'5M Followers',following:'40 Following'},
//   {url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfiZXC0lGcAAi6y1hrCBDGSdslRe3teP-GhvEJvFX1qw&s=10',post:'10 post',followers:'4M Followers',following:'30 Following'}
// ]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Custom_navbar />
    <Scroll/>
    <Getproducts/>
    {/* <Counter /> */}
    {/* {profile.map((e)=>App(e))} */}
  </StrictMode>,
)