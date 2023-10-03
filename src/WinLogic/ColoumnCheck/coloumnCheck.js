const coloumnCheck=(data)=>{
    for(let i=0;i<3;i++)
    {
        if(data[i]===data[i+1] && data[i] ===data[i+2] &&data [i]!="")
        {
            return [true,data[i]];
        }
       
    }
    return  [false, ""];
}

export default coloumnCheck;