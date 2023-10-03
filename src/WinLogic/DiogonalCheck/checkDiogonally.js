const checkDiogonally=(data)=>{

   if(data[0]===data[4] &&data[0]===data[8] &&data [0]!="")
   {
      return [true,data[0],"by diagonally"];
   }
    
   else if(data[2]===data[4] && data[2]===data[6]  &&data [2]!="")
   {
      return [true,data[2],"by diagonally"];
   }
  else{
   return  [false, ""];
  }
}

export default checkDiogonally;