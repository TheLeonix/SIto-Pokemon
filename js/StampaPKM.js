const CalcolaColore=(Num)=>
{
    switch (pokedex[Num].tipo[0]) {
        case "Fuoco":
            document.querySelector('#POTD').style.backgroundColor="#F08030"
            document.querySelector('#TopBar').style.backgroundColor="#F08030"
            document.querySelector('#POTDM').style.backgroundColor="#F08030"
            document.querySelector('#TopBarM').style.backgroundColor="#F08030"
            break;
        case "Elettro":
            document.querySelector('#POTD').style.backgroundColor="#F8D030"
            document.querySelector('#TopBar').style.backgroundColor="#F8D030"
            document.querySelector('#POTDM').style.backgroundColor="#F8D030"
            document.querySelector('#TopBarM').style.backgroundColor="#F8D030"
            break;
        case "Normale":
            document.querySelector('#POTD').style.backgroundColor="#A8A878"
            document.querySelector('#TopBar').style.backgroundColor="#A8A878"
            document.querySelector('#POTDM').style.backgroundColor="#A8A878"
            document.querySelector('#TopBarM').style.backgroundColor="#A8A878"
            break;
        case "Acqua":
            document.querySelector('#POTD').style.backgroundColor="#6890F0"
            document.querySelector('#TopBar').style.backgroundColor="#6890F0"
            document.querySelector('#POTDM').style.backgroundColor="#6890F0"
            document.querySelector('#TopBarM').style.backgroundColor="#6890F0"
            break;
        case "Erba":
            document.querySelector('#POTD').style.backgroundColor="#78C850"
            document.querySelector('#TopBar').style.backgroundColor="#78C850"
            document.querySelector('#POTDM').style.backgroundColor="#78C850"
            document.querySelector('#TopBarM').style.backgroundColor="#78C850"
            break;
        case "Lotta":
            document.querySelector('#POTD').style.backgroundColor="#C03028"
            document.querySelector('#TopBar').style.backgroundColor="#C03028"
            document.querySelector('#POTDM').style.backgroundColor="#C03028"
            document.querySelector('#TopBarM').style.backgroundColor="#C03028"
            break;
        case "Terra":
            document.querySelector('#POTD').style.backgroundColor="#E0C068"
            document.querySelector('#TopBar').style.backgroundColor="#E0C068"
            document.querySelector('#POTDM').style.backgroundColor="#E0C068"
            document.querySelector('#TopBarM').style.backgroundColor="#E0C068"
            break;
        case "Roccia":
            document.querySelector('#POTD').style.backgroundColor="#B8A038"
            document.querySelector('#TopBar').style.backgroundColor="#B8A038"
            document.querySelector('#POTDM').style.backgroundColor="#B8A038"
            document.querySelector('#TopBarM').style.backgroundColor="#B8A038"
            break;
        case "Buio":
            document.querySelector('#POTD').style.backgroundColor="#493d35"
            document.querySelector('#TopBar').style.backgroundColor="#493d35"
            document.querySelector('#POTDM').style.backgroundColor="#493d35"
            document.querySelector('#TopBarM').style.backgroundColor="#493d35"
            break;
        case "???":
            document.querySelector('#POTD').style.backgroundColor="#53CEB1"
            document.querySelector('#TopBar').style.backgroundColor="#53CEB1"
            document.querySelector('#POTDM').style.backgroundColor="#53CEB1"
            document.querySelector('#TopBarM').style.backgroundColor="#53CEB1"
            break;
        case "Ombra":
            document.querySelector('#POTD').style.backgroundColor="#000000"
            document.querySelector('#TopBar').style.backgroundColor="#000000"
            document.querySelector('#POTDM').style.backgroundColor="#000000"
            document.querySelector('#TopBarM').style.backgroundColor="#000000"
            break;
        case "Ghiaccio":
            document.querySelector('#POTD').style.backgroundColor="#98D8D8"
            document.querySelector('#TopBar').style.backgroundColor="#98D8D8"
            document.querySelector('#POTDM').style.backgroundColor="#98D8D8"
            document.querySelector('#TopBarM').style.backgroundColor="#98D8D8"
            break;
        case "Veleno":
            document.querySelector('#POTD').style.backgroundColor="#A040A0"
            document.querySelector('#TopBar').style.backgroundColor="#A040A0"
            document.querySelector('#POTDM').style.backgroundColor="#A040A0"
            document.querySelector('#TopBarM').style.backgroundColor="#A040A0"
            break;
        case "Volante":
            document.querySelector('#POTD').style.backgroundColor="#A890F0"
            document.querySelector('#TopBar').style.backgroundColor="#A890F0"
            document.querySelector('#POTDM').style.backgroundColor="#A890F0"
            document.querySelector('#TopBarM').style.backgroundColor="#A890F0"
            break;
        case "Psico":
            document.querySelector('#POTD').style.backgroundColor="#F85888"
            document.querySelector('#TopBar').style.backgroundColor="#F85888"
            document.querySelector('#POTDM').style.backgroundColor="#F85888"
            document.querySelector('#TopBarM').style.backgroundColor="#F85888"
            break;
        case "Spettro":
            document.querySelector('#POTD').style.backgroundColor="#705898"
            document.querySelector('#TopBar').style.backgroundColor="#705898"
            document.querySelector('#POTDM').style.backgroundColor="#705898"
            document.querySelector('#TopBarM').style.backgroundColor="#705898"
            break;
        case "Coleottero":
            document.querySelector('#POTD').style.backgroundColor="#A8B820"
            document.querySelector('#TopBar').style.backgroundColor="#A8B820"
            document.querySelector('#POTDM').style.backgroundColor="#A8B820"
            document.querySelector('#TopBarM').style.backgroundColor="#A8B820"
            break;
        case "Acciaio":
            document.querySelector('#POTD').style.backgroundColor="#B8B8D0"
            document.querySelector('#TopBar').style.backgroundColor="#B8B8D0"
            document.querySelector('#POTDM').style.backgroundColor="#B8B8D0"
            document.querySelector('#TopBarM').style.backgroundColor="#B8B8D0"
            break;
        case "Drago":
            document.querySelector('#POTD').style.backgroundColor="#7038F8"
            document.querySelector('#TopBar').style.backgroundColor="#7038F8"
            document.querySelector('#POTDM').style.backgroundColor="#7038F8"
            document.querySelector('#TopBarM').style.backgroundColor="#7038F8"
            break;
        case "Folletto":
            document.querySelector('#POTD').style.backgroundColor="#EE99AC"
            document.querySelector('#TopBar').style.backgroundColor="#EE99AC"
            document.querySelector('#POTDM').style.backgroundColor="#EE99AC"
            document.querySelector('#TopBarM').style.backgroundColor="#EE99AC"
            break;                              
        default:
            break;
    }
}
const CalcolaColorTipo=(Num, i)=>
{
    switch (pokedex[Num].tipo[i]) {
        case "Fuoco":
                return "#F08030"
            break;
        case "Elettro":
            return"#F8D030"
            break;
        case "Normale":
            return"#A8A878"
            break;
        case "Acqua":
            return"#6890F0"
            break;
        case "Erba":
            return"#78C850"
            break;
        case "Lotta":
            return"#C03028"
            break;
        case "Terra":
            return"#E0C068"
            break;
        case "Roccia":
            return"#B8A038"
            break;
        case "Buio":
            return"#493d35"
            break;
        case "???":
            return"#53CEB1"
            break;
        case "Ombra":
            return"#000000"
            break;
        case "Ghiaccio":
            return"#98D8D8"
            break;
        case "Veleno":
            return"#A040A0"
            break;
        case "Volante":
            return"#A890F0"
            break;
        case "Psico":
            return"#F85888"
            break;
        case "Spettro":
            return"#705898"
            break;
        case "Coleottero":
            return"#A8B820"
            break;
        case "Acciaio":
            return"#B8B8D0"
            break;
        case "Drago":
            return"#7038F8"
            break;
        case "Folletto":
            return"#EE99AC"
            break;                              
        default:
            break;
    }
}
const CalcolaColorTipoDebolezze=(Num, i)=>
{
    switch (pokedex[Num].debolezze[i]) {
        case "Fuoco":
                return "#F08030"
            break;
        case "Elettro":
            return"#F8D030"
            break;
        case "Normale":
            return"#A8A878"
            break;
        case "Acqua":
            return"#6890F0"
            break;
        case "Erba":
            return"#78C850"
            break;
        case "Lotta":
            return"#C03028"
            break;
        case "Terra":
            return"#E0C068"
            break;
        case "Roccia":
            return"#B8A038"
            break;
        case "Buio":
            return"#493d35"
            break;
        case "???":
            return"#53CEB1"
            break;
        case "Ombra":
            return"#000000"
            break;
        case "Ghiaccio":
            return"#98D8D8"
            break;
        case "Veleno":
            return"#A040A0"
            break;
        case "Volante":
            return"#A890F0"
            break;
        case "Psico":
            return"#F85888"
            break;
        case "Spettro":
            return"#705898"
            break;
        case "Coleottero":
            return"#A8B820"
            break;
        case "Acciaio":
            return"#B8B8D0"
            break;
        case "Drago":
            return"#7038F8"
            break;
        case "Folletto":
            return"#EE99AC"
            break;                              
        default:
            break;
    }
}






const StampaPKMV=(Num)=>
{
    let Tipo="no"
    CalcolaColore(Num)
    document.querySelector('#NumeroPKMM').innerHTML=pokedex[Num].numero
    document.querySelector('#NumeroPKM').innerHTML=pokedex[Num].numero
    document.querySelector('#NomePKM').innerHTML=pokedex[Num].nome
    document.querySelector('#NomePKMM').innerHTML=pokedex[Num].nome
    document.querySelector('#IMG_POTD').src=pokedex[Num].img_url
    document.querySelector('#IMGPOTDM').src=pokedex[Num].img_url
    for(i=0; i<pokedex[Num].tipo.length;i++)
    {
        //PC
        let DivTipo=document.createElement("div");
        DivTipo.setAttribute("class", "TipoPKM");
        DivTipo.textContent=pokedex[Num].tipo[i]
        Tipo=CalcolaColorTipo(Num, i)
        DivTipo.style.backgroundColor=Tipo
        document.querySelector("#TipiPKM").appendChild(DivTipo)
        if (pokedex[Num].tipo.length==1)
        {
            document.querySelector('#TipiPKM').style.justifyContent="center"
        }
        //Mobile
        let DivMTipo=document.createElement("div")
        DivMTipo.setAttribute("class", "TipoPKMM");
        DivMTipo.textContent=pokedex[Num].tipo[i]
        DivMTipo.style.backgroundColor=Tipo
        document.querySelector("#TipiPKMM").appendChild(DivMTipo)
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
        //Mobile
        let DivMTipo=document.createElement("div")
        DivMTipo.setAttribute("class", "DebolezzePKMM");
        DivMTipo.textContent=pokedex[Num].debolezze[i]
        Tipo=CalcolaColorTipoDebolezze(Num, i)
        DivMTipo.style.backgroundColor=Tipo
        document.querySelector("#DebPKMM").appendChild(DivMTipo)
    }
    document.querySelector("#Stadio").innerHTML=pokedex[Num].stadio_evolutivo
    document.querySelector("#FasePKMM").innerHTML=pokedex[Num].stadio_evolutivo
    document.querySelector("#FasePKMMS").innerHTML=pokedex[Num].stadio_evolutivo
    document.querySelector("#primo").innerHTML=pokedex[Num].altezza+" Metri"
    document.querySelector("#secondo").innerHTML=pokedex[Num].peso+" KG"
    document.querySelector("#terzo").innerHTML=pokedex[Num].tasso_di_cattura
    document.querySelector("#IPrimo").innerHTML=pokedex[Num].altezza+" Metri"
    document.querySelector("#ISecondo").innerHTML=pokedex[Num].peso+" KG"
    document.querySelector("#ITerzo").innerHTML=pokedex[Num].tasso_di_cattura
}
