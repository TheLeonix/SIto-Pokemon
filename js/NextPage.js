const Next=()=>
{
    CurrentPKM= localStorage.getItem('Current');
    console.log(CurrentPKM)
    if(CurrentPKM!=888)
    { window.location.href='StampaPKM.html'}
}
const StampaNext=()=>
{
    Arraycount()
    CreaPKM()
    CreaTipo()
    CurrentPKM= localStorage.getItem('Current');
    console.log(CurrentPKM)
    CurrentPKM = parseInt(CurrentPKM);
    CurrentPKM=CurrentPKM+1
    console.log(CurrentPKM)
    localStorage.setItem('Current',CurrentPKM)
    StampaPKMV(CurrentPKM)
    if(CurrentPKM!=0)
    {
        document.querySelector("#uno").value="<--"+pokedex[CurrentPKM-1].nome
    }
    document.querySelector("#due").innerHTML=pokedex[CurrentPKM].nome
    if(CurrentPKM!=890)
    {
        document.querySelector("#tre").value=pokedex[CurrentPKM+1].nome+"-->"
    }
}

const Prima=()=>
{
    CurrentPKM= localStorage.getItem('Current');
    console.log(CurrentPKM)
    if(CurrentPKM!=0)
    { window.location.href='StampaPPKM.html'}
}

const StampaPrima=()=>
{
    Arraycount()
    CreaPKM()
    CreaTipo()
    CurrentPKM= localStorage.getItem('Current');
    console.log(CurrentPKM)
    CurrentPKM = parseInt(CurrentPKM);
    CurrentPKM=CurrentPKM-1
    console.log(CurrentPKM)
    localStorage.setItem('Current',CurrentPKM)
    StampaPKMV(CurrentPKM)
    if(CurrentPKM!=0)
    {
        document.querySelector("#uno").value="<--"+pokedex[CurrentPKM-1].nome
    }
    document.querySelector("#due").innerHTML=pokedex[CurrentPKM].nome
    if(CurrentPKM!=890)
    {
        document.querySelector("#tre").value=pokedex[CurrentPKM+1].nome+"-->"
    }
}

const StampaSearchPKM=()=>
{
    Arraycount()
    CreaPKM()
    CreaTipo()
    CurrentPKM= localStorage.getItem('Indice')
    CurrentPKM = parseInt(CurrentPKM);
    CurrentPKM=CurrentPKM+1
    console.log(CurrentPKM)
    localStorage.setItem('Current',CurrentPKM)
    StampaPKMV(CurrentPKM)
    if(CurrentPKM!=0)
    {
        document.querySelector("#uno").value="<--"+pokedex[CurrentPKM-1].nome
    }
    document.querySelector("#due").innerHTML=pokedex[CurrentPKM].nome
    if(CurrentPKM!=890)
    {
        document.querySelector("#tre").value=pokedex[CurrentPKM+1].nome+"-->"
    }

}