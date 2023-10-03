const coloumnCheck=(data)=>{
    for(let i=0;i<3;i++)
    {
        if(data[i]===data[i+3] && data[i] ===data[i+6] &&data [i]!="")
        {
            return [true,data[i],"by coloumn"];
        }
       
    }
    return  [false, ""];
}

export default coloumnCheck;