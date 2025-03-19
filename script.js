let nome = [
    "Breaking Bad - A Química do Mal","Vingadores: Ultimato","Coringa: Delírio a Dois","The Batman","Interestelar"
];
let descricao = [
    "Walter White (Bryan Cranston) é um professor de química de 50 anos que trabalha numa escola secundária em Albuquerque, Novo México. Ele tem uma família a sustentar, incluindo uma esposa grávida e um filho com paralisia cerebral. Quando descobre que tem cancro, Walter decide usar os seus conhecimentos de química para fabricar e vender metanfetamina.",
    
    "ingadores: Ultimato* é a sequência de Vingadores: Guerra Infinita. Os Vingadores precisam se unir para derrotar Thanos, que se tornou um ser com poderes quase ilimitados. Os heróis precisam lidar com a dor da perda de amigos e entes queridos.",
    
    "Arthur Fleck (Joaquin Phoenix) está preso em Arkham, mas sua transformação está longe de acabar. Quando ele conhece a Dra. Harleen Quinzel (Lady Gaga), uma psiquiatra que acaba se apaixonando por ele, as coisas começam a sair ainda mais do controle. Juntos, eles criam um caos que leva Gotham a um lugar ainda mais sombrio. Um filme cheio de tensão, loucura e até números musicais, que vai te deixar sem fôlego.",
    
    "Gotham está mergulhada no crime e na corrupção, mas um vigilante mascarado começa a mudar esse jogo. Quando um assassino em série começa a deixar pistas enigmáticas por toda a cidade, Bruce Wayne precisa encarar seus próprios demônios para impedir que Gotham caia no caos. Com uma pegada mais sombria e investigativa, The Batman traz um herói mais brutal, desconfiado e determinado a descobrir a verdade.",

    "A Terra está morrendo, e a única chance da humanidade é encontrar um novo lar entre as estrelas. Um grupo de astronautas embarca em uma jornada através de um buraco de minhoca em busca de um planeta habitável, enfrentando dilemas emocionais, desafios científicos e o peso do tempo que passa diferente no espaço. Em meio a visuais de tirar o fôlego e uma trilha sonora inesquecível, Interestelar é uma viagem épica sobre amor, sacrifício e o desconhecido."
];
let ano = [
    2008,2019,2024,2022,2014
];
let foto = [
    "banner1.jpg","banner2.jpg","banner3.jpg","banner4.jpg","banner5.jpg"
];
let temporada = [
    5,"3h 1m","2h 18m","2h 56m","2h 49m"
];
let listaFilme = []
function banners(){
    for(let i= 0;i<nome.length;i++){
        let objeto = {
            nome: nome[i],
            descricao: descricao[i],
            ano: ano[i],
            img: foto[i],
            temporada: temporada[i]
        }
        listaFilme.push(objeto);

    }
return listaFilme;
}

let lista = banners();
let index = 0;

console.log(lista)

function MudarCarrosel(num){
    let banner = document.querySelector(".carrosel-img");
    let ano = document.querySelector(".ano");
    let nome = document.querySelector(".tituloBanner");
    let descricao = document.querySelector(".descricao");
    let temporada = document.querySelector(".temporada");
    if(num == -1){
        banner.src =`/imgs/${lista[0].img}` 
        index = 0;
    } 
    else if(num == 0){
        if(index == 4){
            index = 0;
        }
        else{
            index++;
        }
    }
    else{
        if(index == 0){
            index = 4; 
        }
        else{
            index--;
            
        }
    }
    banner.src =`/imgs/${lista[index].img}` 
    nome.innerHTML = lista[index].nome;
    ano.innerHTML = lista[index].ano;
    descricao.innerHTML = lista[index].descricao;
    typeof lista[index].temporada !== "string"? temporada.innerHTML = `${lista[index].temporada} temporada`: temporada.innerHTML = lista[index].temporada;
}



MudarCarrosel(-1);