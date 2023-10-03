const checkRow=(data)=>{
    for (let i = 0; i <9; i+=3) {
       if(data[i]===data[i+1] && data[i] ===data[i+2] &&data [i]!="")
       {
        return [true,data[i]];
       }
    }
    return  [false, ""];
}

export default checkRow;