const CalcolaColore=(Num)=>
{
    switch (pokedex[Num].tipo[0]) {
        case "Fuoco":
            document.querySelector('#POTD').style.backgroundColor="red"
            document.querySelector('#TopBar').style.backgroundColor="red"
            break;
        case "Elettro":
            document.querySelector('#POTD').style.backgroundColor="yellow"
            document.querySelector('#TopBar').style.backgroundColor="yellow"
            break;
        case "Normale":
            document.querySelector('#POTD').style.backgroundColor="gainsboro"
            document.querySelector('#TopBar').style.backgroundColor="gainsboro"
            break;
        case "Acqua":
            document.querySelector('#POTD').style.backgroundColor="blue"
            document.querySelector('#TopBar').style.backgroundColor="blue"
            break;
        case "Erba":
            document.querySelector('#POTD').style.backgroundColor="green"
            document.querySelector('#TopBar').style.backgroundColor="green"
            break;
        case "Lotta":
            document.querySelector('#POTD').style.backgroundColor="maroon"
            document.querySelector('#TopBar').style.backgroundColor="maroon"
            break;
        case "Terra":
            document.querySelector('#POTD').style.backgroundColor="brown"
            document.querySelector('#TopBar').style.backgroundColor="brown"
            break;
        case "Roccia":
            document.querySelector('#POTD').style.backgroundColor="burlywood"
            document.querySelector('#TopBar').style.backgroundColor="burlywood"
            break;
        case "Buio":
            document.querySelector('#POTD').style.backgroundColor="black"
            document.querySelector('#TopBar').style.backgroundColor="black"
            break;
        case "???":
            document.querySelector('#POTD').style.backgroundColor="aquamarine"
            document.querySelector('#TopBar').style.backgroundColor="aquamarine"
            break;
        case "Ombra":
            document.querySelector('#POTD').style.backgroundColor="black"
            document.querySelector('#TopBar').style.backgroundColor="black"
            break;
        case "Ghiaccio":
            document.querySelector('#POTD').style.backgroundColor="aqua"
            document.querySelector('#TopBar').style.backgroundColor="aqua"
            break;
        case "Veleno":
            document.querySelector('#POTD').style.backgroundColor="plum"
            document.querySelector('#TopBar').style.backgroundColor="plum"
            break;
        case "Volante":
            document.querySelector('#POTD').style.backgroundColor="skyblue"
            document.querySelector('#TopBar').style.backgroundColor="skyblue"
            break;
        case "Psico":
            document.querySelector('#POTD').style.backgroundColor="pink"
            document.querySelector('#TopBar').style.backgroundColor="pink"
            break;
        case "Spettro":
            document.querySelector('#POTD').style.backgroundColor="purple"
            document.querySelector('#TopBar').style.backgroundColor="purple"
            break;
        case "Coleottero":
            document.querySelector('#POTD').style.backgroundColor="lightgreen"
            document.querySelector('#TopBar').style.backgroundColor="lightgreen"
            break;
        case "Acciaio":
            document.querySelector('#POTD').style.backgroundColor="grey"
            document.querySelector('#TopBar').style.backgroundColor="grey"
            break;
        case "Drago":
            document.querySelector('#POTD').style.backgroundColor="darkblue"
            document.querySelector('#TopBar').style.backgroundColor="darkblue"
            break;
        case "Folletto":
            document.querySelector('#POTD').style.backgroundColor="plum"
            document.querySelector('#TopBar').style.backgroundColor="plum"
            break;                              
        default:
            break;
    }
}
const CalcolaColorTipo=(Num, i)=>
{
    switch (pokedex[Num].tipo[i]) {
        case "Fuoco":
                return "red"
            break;
        case "Elettro":
            return"yellow"
            break;
        case "Normale":
            return"gainsboro"
            break;
        case "Acqua":
            return"blue"
            break;
        case "Erba":
            return"green"
            break;
        case "Lotta":
            return"maroon"
            break;
        case "Terra":
            return"brown"
            break;
        case "Roccia":
            return"burlywood"
            break;
        case "Buio":
            return"black"
            break;
        case "???":
            return"aquamarine"
            break;
        case "Ombra":
            return"black"
            break;
        case "Ghiaccio":
            return"aqua"
            break;
        case "Veleno":
            return"plum"
            break;
        case "Volante":
            return"skyblue"
            break;
        case "Psico":
            return"pink"
            break;
        case "Spettro":
            return"purple"
            break;
        case "Coleottero":
            return"lightgreen"
            break;
        case "Acciaio":
            return"grey"
            break;
        case "Drago":
            return"darkblue"
            break;
        case "Folletto":
            return"plum"
            break;                              
        default:
            break;
    }
}
const CalcolaColorTipoDebolezze=(Num, i)=>
{
    switch (pokedex[Num].debolezze[i]) {
        case "Fuoco":
                return "red"
            break;
        case "Elettro":
            return"yellow"
            break;
        case "Normale":
            return"gainsboro"
            break;
        case "Acqua":
            return"blue"
            break;
        case "Erba":
            return"green"
            break;
        case "Lotta":
            return"maroon"
            break;
        case "Terra":
            return"brown"
            break;
        case "Roccia":
            return"burlywood"
            break;
        case "Buio":
            return"black"
            break;
        case "???":
            return"aquamarine"
            break;
        case "Ombra":
            return"black"
            break;
        case "Ghiaccio":
            return"aqua"
            break;
        case "Veleno":
            return"plum"
            break;
        case "Volante":
            return"skyblue"
            break;
        case "Psico":
            return"pink"
            break;
        case "Spettro":
            return"purple"
            break;
        case "Coleottero":
            return"lightgreen"
            break;
        case "Acciaio":
            return"grey"
            break;
        case "Drago":
            return"darkblue"
            break;
        case "Folletto":
            return"plum"
            break;                              
        default:
            break;
    }
}






const StampaPKMV=(Num)=>
{
    let Tipo="no"
    CalcolaColore(Num)
    document.querySelector('#NumeroPKM').innerHTML=pokedex[Num].numero
    document.querySelector('#NomePKM').innerHTML=pokedex[Num].nome
    document.querySelector('#IMG_POTD').src=pokedex[Num].img_url
    for(i=0; i<pokedex[Num].tipo.length;i++)
    {
        let DivTipo=document.createElement("div");
        DivTipo.setAttribute("class", "TipoPKM");
        DivTipo.textContent=pokedex[Num].tipo[i]
        Tipo=CalcolaColorTipo(Num, i)
        DivTipo.style.backgroundColor=Tipo
        document.querySelector("#TipiPKM").appendChild(DivTipo)
        if (pokedex[Num].tipo.length==1)
        {
            document.querySelector('#TipiPKM').style.justifyContent="center"
            document.querySelector('.TipoPKM').style.width="80%"
        }
    }
    for(i=0; i<pokedex[Num].debolezze.length;i++)
    {
        let DivTipo=document.createElement("div");
        DivTipo.setAttribute("class", "TipoPKM");
        DivTipo.setAttribute("id", "DebPKM");
        DivTipo.textContent=pokedex[Num].debolezze[i]
        Tipo=CalcolaColorTipoDebolezze(Num, i)
        DivTipo.style.backgroundColor=Tipo
        document.querySelector("#DPOTD").appendChild(DivTipo)
    }
    document.querySelector("#Stadio").innerHTML=pokedex[Num].stadio_evolutivo
    document.querySelector("#primo").innerHTML=pokedex[Num].altezza+" Metri"
    document.querySelector("#secondo").innerHTML=pokedex[Num].peso+" KG"
    document.querySelector("#terzo").innerHTML=pokedex[Num].tasso_di_cattura
}
