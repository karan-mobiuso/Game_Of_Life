
var rows=10;
var cols=10;
var currentRow=0;
var currentCol=0;
var lifeBoard=new Array(rows);
for(var i=0;i<rows;i++)
{
    lifeBoard[i] = new Array(cols);
}
var nextGenBoard= new Array(rows);
for(var i=0;i<cols;i++)
{
    nextGenBoard[i]=new Array(cols);
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
                document.getElementById("outputGameBoard").rows[i].cells[j].setAttribute("style","background-color:red");
            }
            else if(lifeBoard[i][j]===1)
            {
                document.getElementById("outputGameBoard").rows[i].cells[j].setAttribute("style","background-color:green");
            }
        }
    }
    //createNextGen();
}
function createNextGen()
{
    for(var currentRow=0;currentRow<rows;currentRow++)
    {
        for(var currentCol=0;currentCol<cols;currentCol++)
        {
            if(currentRow===0 || currentCol===0)
            {
                continue;
            }
            else if(currentRow===rows-1 || currentCol===cols-1)
            {
                continue;
            }
            else
            {
                var neighborStatusSum = calculateNeighborStatus(currentRow,currentCol);

                if(neighborStatusSum==3 && lifeBoard[currentRow][currentCol]==0)
                {
                    nextGenBoard[currentRow][currentCol]=1;
                    document.getElementById("outputGameBoard").rows[currentRow].cells[currentCol].setAttribute("style","background-color:blue");
                }
                else if(neighborStatusSum<2 || neighborStatusSum>3)
                {
                    nextGenBoard[currentRow][currentCol]=0;
                }
                else
                {
                    nextGenBoard[currentRow][currentCol]=1;
                }
            }
        }
    }
    changeNextGenToCurrentGen();
    provideVisualsToOrganismState();
}

function calculateNeighborStatus(currrentRow,currentCol)
{
    var neighborStatusSum=0;
    for(var i=currrentRow-1;i<=currentRow+2;i++)
    {
        for(var j=currentCol-1;j<=currentCol+2;j++)
        {
            neighborStatusSum+=lifeBoard[i][j];
        }
    }
    neighborStatusSum = neighborStatusSum-lifeBoard[currentRow][currentCol];
    return neighborStatusSum;
}

function changeNextGenToCurrentGen()
{
    for(var i=0;i<rows;i++)
    {
        for(var j=0;j<cols;j++)
        {
            lifeBoard[i][j] = nextGenBoard[i][j];
        }
    }
}