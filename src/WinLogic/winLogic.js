import coloumnCheck from "./ColoumnCheck/coloumnCheck";
import checkDiogonally from "./DiogonalCheck/checkDiogonally"
import checkRow from "./RowCheck/checkRow";
const winLogic=(data)=>
{
    const row=checkRow(data);
    const col=coloumnCheck(data);
    const diogonal=checkDiogonally(data);

    if(row[0]===true)
    {
        return row;
    }
    else if(col[0]===true)
    {
        return col;
    }
    else if(diogonal[0]===true)
    {
        return diogonal;
    }
   else  return [false,""]; 
}

export default winLogic;