

function GameBox({data,setClick,index1,index2,index3}) {
  
  return (
        <>
            <div  className="w-[70px]  border-2 h-14" onClick={()=>{setClick(index1)}}><h1 className='text-center p-2'>{data[index1]}</h1></div>
            <div  className="w-[70px]  border-2 h-14"onClick={()=>{setClick(index2)}}><h1 className='text-center p-2'>{data[index2]}</h1></div>
            <div  className="w-[70px]  border-2 h-14"onClick={()=>{setClick(index3)}}><h1 className='text-center p-2'>{data[index3]}</h1></div>
        </>         
  )
}

export default GameBox