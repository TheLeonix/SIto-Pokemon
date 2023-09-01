let word = "g"
let found = []
let count=0
const PKMSuggested=document.querySelector("#Pagina")

const RicercaN=()=>
{
	word=document.querySelector("#SearchByName").value
	found = []
    word = word.toLowerCase()
    for(i=0; i<pokedex.length; i++)
    {
		let pkm=pokedex[i].nome.toLowerCase()
        if(pkm.includes(word))
        {
			count++
			found.push(i)
			console.log("trovato")
        }
    }
	StampaPKM()
}

const StampaPKM=()=>
{
	var listaElementiDaRimuovere = document.querySelectorAll(".StampaSearch");

		listaElementiDaRimuovere.forEach((DivPKM)=>{
			DivPKM.remove();
		});
	console.log("entrato")
	for(i=0; i<found.length; i++)
	{
		console.log("Tipo del pokemon " + pokedex[found[i]].numero + "=" + pokedex[found[i]].tipo)
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
}
