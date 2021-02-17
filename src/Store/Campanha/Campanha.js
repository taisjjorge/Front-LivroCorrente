const Estado_Inicial = {
    biblioteca: []
}

function Campanha(state= Estado_Inicial, action){
    switch(action.type){
        case 'Seleciona_Biblioteca':
            return { ...state, biblioteca: [action.id]}

        default:
            return state
    }
}

export default Campanha