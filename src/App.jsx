


function App({url,post,followers,following}) {
 

  return <div style={{display:'flex',alignItems:'center',gap:'15px'}}>
           <img style={{borderRadius:'50%',width:'100px',height:'100px'}} src={url}/>
           <h2>{post}</h2>
           <h2>{followers}</h2>
           <h2>{following}</h2>
         </div>
}
export default App