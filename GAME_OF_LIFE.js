
var rows=10;
var cols=10;
var lifeBoard=new Array(rows);

for(var i=0;i<rows;i++)
{
    lifeBoard[i] = new Array(cols);
}
function allotRandomLivingState()
{
    for(var i=0;i<rows;i++)
    {
        for(var j=0;j<cols;j++)
        {
            lifeBoard[i][j] = Math.floor(Math.random()*Math.floor(2));
        }
    }
    provideVisualsToOrganismState();
}

function provideVisualsToOrganismState()
{
    for(var i=0;i<rows;i++)
    {
        for(var j=0;j<cols;j++)
        {
            if(lifeBoard[i][j]===0)
            {
                document.getElementById("outputGameBoard").rows[i].cells[j].setAttribute("style","background-color:black");
            }
            else if(lifeBoard[i][j]===1)
            {
                    document.getElementById("outputGameBoard").rows[i].cells[j].setAttribute("style","background-color:white");
            }
        }
    }

    createNextGen();
}
function createNextGen()
{
    
}