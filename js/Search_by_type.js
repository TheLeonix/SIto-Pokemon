let type = "erba"
const RicercaT=()=>
{
    found=[]
    type=type.toLowerCase()
    for(i=0; i<pokedex.length; i++)
    {
        for(j=0; j<pokedex[i].tipo.length; j++)
        {
            let tipo=pokedex[i].tipo[j].toLowerCase()
            if(tipo.includes(type))
            {
                found.push(i)
                console.log("trovato")
            }
        }
    }
    StampaTipo()

}
const StampaTipo=()=>
{
	console.log("entrato")
	for(i=0; i<found.length; i++)
	{
		console.log("Numero dei pokemon " + type + "="  + pokedex[found[i]].numero )
	}

}