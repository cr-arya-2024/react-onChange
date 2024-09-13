import { useState } from 'react'
function Component(){
    const[name,setName]=useState("Name");
    const[num,setNum]=useState("0");
    const[comment,setComment]=useState("");
    const[select,setSelect]=useState("Select Anyone");



    function handleName(e){
        setName(e.target.value)
    }
    function handleNum(e){
        setNum(e.target.value)
    }
    function handleComment(e){
        setComment(e.target.value)
    }
    function handleSelect(e){
        setSelect(e.target.value)
    }
    
    
    
    
    
    
    
    return(
        <>
    <input type="text" value={name} onChange={handleName}/>
        <p>Name:{name}</p>
    <input type="number" value={num} onChange={handleNum}/>
        <p>Number:{num}</p>
    <textarea value={comment}  placeholder="write the comments" onChange={handleComment}  />
    <p>Comment:{comment}</p>
<select value={select} onChange={handleSelect}>
    <option value="Select anyone">Select Anyone</option>
    <option value="Paytm">Paytm</option>
    <option value="Google">Google</option>
    <option value="Phone Pay">Phone Pay</option>
</select>
<p>Payment:{select}</p>
        </>
    )
}
export default Component