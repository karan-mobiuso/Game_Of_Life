var rows=10;
var cols=10 ;
var currentRow=0;
var currentCol=0;
var currentGenBoard=new Array(rows);
for(var i=0;i<rows;i++)
{
    currentGenBoard[i] = new Array(cols);
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
            currentGenBoard[i][j] = Math.floor(Math.random()*Math.floor(2));
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
            if(currentGenBoard[i][j]===0)
            {
                document.getElementById("outputGameBoard").rows[i].cells[j].setAttribute("style","background-color:green");
            }
            else if(currentGenBoard[i][j]===1)
            {
                document.getElementById("outputGameBoard").rows[i].cells[j].setAttribute("style","background-color:red");
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
            var neighborStatusSum = calculateNeighborStatus(currentRow,currentCol);
            if(neighborStatusSum===3 && currentGenBoard[currentRow][currentCol]===0)
            {
                nextGenBoard[currentRow][currentCol]=1;
                document.getElementById("outputGameBoard").rows[currentRow].cells[currentCol].setAttribute("style","background-color:blue");
            }
            else if(neighborStatusSum<2 || neighborStatusSum>3 && currentGenBoard[currentRow][currentCol]===1)
            {
                nextGenBoard[currentRow][currentCol]=0;
            }
            else if((neighborStatusSum===2 || neighborStatusSum===3) && currentGenBoard[currentRow][currentCol]===1)
            {
                nextGenBoard[currentRow][currentCol]=1;
            }
            else
            {
                nextGenBoard[currentRow][currentCol]=0;
            }
        }
    }
    changeNextGenToCurrentGen();
    provideVisualsToOrganismState();
}

function calculateNeighborStatus(currrentRow,currentCol)
{
    var neighborStatusSum=0;
    for(var i=-1;i<2;i++)
    {
        for(var j=-1;j<2;j++)
        {
            var row = (j+currentRow+cols)%cols;
            var col = (i+currentCol+rows)%rows;
            neighborStatusSum+=currentGenBoard[row][col];
        }
    }
    neighborStatusSum = neighborStatusSum-currentGenBoard[currentRow][currentCol];
    return neighborStatusSum;
}

function changeNextGenToCurrentGen()
{
    for(var i=0;i<rows;i++)
    {
        for(var j=0;j<cols;j++)
        {
            currentGenBoard[i][j] = nextGenBoard[i][j];
        }
    }
}