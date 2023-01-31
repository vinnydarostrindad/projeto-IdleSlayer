var personagemEscolhido = ""

function escolher(pers) {
    var personagem = pers.id;

    switch (personagem) {
        case "roy": 
            var roy = document.querySelector(".roy");
            roy.classList.add("abrir")
            personagemEscolhido = "roy";
        break
        case "anna":
            var anna = document.querySelector(".anna");
            anna.classList.add("abrir")
            personagemEscolhido = "anna";
        break
        case "minita":
            var minita = document.querySelector(".minita");
            minita.classList.add("abrir")
            personagemEscolhido = "minita";
            break
        case "skar":
            var skar = document.querySelector(".skar");
            skar.classList.add("abrir")
            personagemEscolhido = "skar";
        break
        case "fayar":
            var fayar = document.querySelector(".fayar");
            fayar.classList.add("abrir")
            personagemEscolhido = "fayar";
        break
        case "benvolio":
            var benvolio = document.querySelector(".benvolio");
            benvolio.classList.add("abrir")
            personagemEscolhido = "benvolio";
        break
        case "runhardt":
            var runhardt = document.querySelector(".runhardt");
            runhardt.classList.add("abrir")
            personagemEscolhido = "runhardt";
        break
        case "agnis":
            var agnis = document.querySelector(".agnis");
            agnis.classList.add("abrir")
            personagemEscolhido = "agnis";
        break
        case "kristof":
            var kristof = document.querySelector(".kristof");
            kristof.classList.add("abrir")
            personagemEscolhido = "kristof";
        break
        case "haskell":
            var haskell = document.querySelector(".haskell");
            haskell.classList.add("abrir")
            personagemEscolhido = "haskell";
        break
        default:
            var azure = document.querySelector(".azure");
            azure.classList.add("abrir")
            personagemEscolhido = "azure";
    }

    var alternarPrincipal = document.querySelector(".container")
    alternarPrincipal.classList.add("fechar")
}

function voltar() {
    
    switch (personagemEscolhido) {
        case "roy": 
            var roy = document.querySelector(".roy");
            roy.classList.remove("abrir")
        break
        case "anna":
            var anna = document.querySelector(".anna");
            anna.classList.remove("abrir")
        break
        case "minita":
            var minita = document.querySelector(".minita");
            minita.classList.remove("abrir")
            break
        case "skar":
            var skar = document.querySelector(".skar");
            skar.classList.remove("abrir")
        break
        case "fayar":
            var fayar = document.querySelector(".fayar");
            fayar.classList.remove("abrir")
        break
        case "benvolio":
            var benvolio = document.querySelector(".benvolio");
            benvolio.classList.remove("abrir")
        break
        case "runhardt":
            var runhardt = document.querySelector(".runhardt");
            runhardt.classList.remove("abrir")
        break
        case "agnis":
            var agnis = document.querySelector(".agnis");
            agnis.classList.remove("abrir")
        break
        case "kristof":
            var kristof = document.querySelector(".kristof");
            kristof.classList.remove("abrir")
        break
        case "haskell":
            var haskell = document.querySelector(".haskell");
            haskell.classList.remove("abrir")
        break
        default:
            var azure = document.querySelector(".azure");
            azure.classList.remove("abrir")
    }

    var alternarPrincipal = document.querySelector(".container")
    alternarPrincipal.classList.remove("fechar")
}



// OQUE TENTEI FAZER PELA PRIMEIRA FEZ, mas pensei em outra coisa enquanto fazia ela, que foi a solução se cima

// var personagens = document.querySelectorAll(".personagem");
// var personagemListNumber = [];

// reconhecerPersonagens()

// function reconhecerPersonagens() {
    
//     personagens.forEach(function(pers) {
//         personagemListNumber.push(pers.id)
//     })
// }

// function escolher() {

//     switch () {
//         case 0: 
//             alert("Roy");
//         break
//         case 1:
//             alert("Anna");
//         break
//         case 2:
//             alert("Minita");
//         case 3:
//             alert("Skar");
//         break
//         case 4:
//             alert("Fayar");
//         break
//         case 5:
//             alert("Benvolio");
//         break
//         case 6:
//             alert("Runhardt");
//         break
//         case 7:
//             alert("Agnis");
//         break
//         case 8:
//             alert("Kristof");
//         break
//         case 9:
//             alert("Haskell");
//         break
//         default:
//             alert("Azure");
//     }
// }