let type ="erba"

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
    var listaElementiDaRimuovere = document.querySelectorAll(".StampaSearch");

    listaElementiDaRimuovere.forEach((DivPKM)=>{
        DivPKM.remove();
    });
	console.log("entrato")
	for(i=0; i<found.length; i++)
	{
		console.log("Numero dei pokemon " + type + "="  + pokedex[found[i]].numero )
	}
    for(i=0; i<found.length; i++)
	{
		const DivPKM = document.createElement('div');
		const ImgDivPKM = document.createElement('img');
		const TextDivPKM = document.createElement('div')
		DivPKM.setAttribute("class", "StampaSearch");
		DivPKM.setAttribute("data-indice", found[i])
		DivPKM.addEventListener('click', (event) => {
			var indice = event.currentTarget.getAttribute("data-indice")
			localStorage.setItem('Indice',indice-1)
			window.location.href='StampaRicPKM.html'
		});
		Tipo=CalcolaColorTipo(found[i], 0)
		DivPKM.style.backgroundColor=Tipo
		ImgDivPKM.src= pokedex[found[i]].img_url
		TextDivPKM.textContent=pokedex[found[i]].nome
		ImgDivPKM.setAttribute("class","FotoPKMSearch")
		TextDivPKM.setAttribute("class","TextSearchPKM")
		DivPKM.appendChild(ImgDivPKM)
		DivPKM.appendChild(TextDivPKM)
		document.querySelector("#Pagina").appendChild(DivPKM)
	}
    document.querySelector("#Pagina").scrollBy(0,840)
}
const tipoNormale = () => {type ="Normale";RicercaT()}
const tipoLotta = () => {type ="Lotta";RicercaT()}
const tipoVolante = () => {type ="Volante";RicercaT()}
const tipoVeleno = () => {type ="Veleno";RicercaT()}
const tipoTerra = () => {type ="Terra";RicercaT()}
const tipoRoccia = () => {type ="Roccia";RicercaT()}
const tipoColeottero = () => {type ="Coleottero";RicercaT()}
const tipoSpettro = () => {type ="Spettro";RicercaT()}
const tipoAcciaio = () => {type ="Acciaio";RicercaT()}
const tipoFuoco = () => {type ="Fuoco";RicercaT()}
const tipoAcqua = () => {type ="Acqua";RicercaT()}
const tipoErba = () => {type ="Erba";RicercaT()}
const tipoElettro = () => {type ="Elettro";RicercaT()}
const tipoPsico = () => {type ="Psico";RicercaT()}
const tipoGhiaccio = () => {type ="Ghiaccio";RicercaT()}
const tipoDrago = () => {type ="Drago";RicercaT()}
const tipoBuio = () => {type ="Buio";RicercaT()}
const tipoFolletto = () => {type ="Folletto";RicercaT()}