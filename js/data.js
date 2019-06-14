function dataEntry(pos, piece){
    let row = pos[0]
    let column = pos[1]-1
    chessBoard[row][column] = `${piece}`
}
function dataRemove(pos){
    let row = pos[0]
    let column = pos[1]-1
    chessBoard[row][column] = ''
}
function piece_per_piece(piece, indexRow, indexColumn){
    switch (piece) {
        case 'pawnwhite':
            let move_pW = {
                move1: `${rows[indexRow+1]}`+`${columns[indexColumn]}`,
                move2: `${rows[indexRow+2]}`+`${columns[indexColumn]}`
            }
            var position_test_pW = scan(move_pW)
            if (is_empty(position_test_pW) == true){
                return position_test_pW
            }else{
                console.log('false2')
            }
            break;
        case 'pawndark':
            let move_pB = {
                move1: `${rows[indexRow-1]}`+`${columns[indexColumn]}`,
                move2: `${rows[indexRow-2]}`+`${columns[indexColumn]}`
            }
            let position_test_pB = scan(move_pB)
            if (is_empty(position_test_pB) == true){
                return position_test_pB
            }else{
                console.log('false2')
            }
            break; 
        case 'knightwhite':
            let move_kW = {
                move1: `${rows[indexRow+2]}`+`${columns[indexColumn+1]}`,
                move2: `${rows[indexRow+2]}`+`${columns[indexColumn-1]}`, 
                move3: `${rows[indexRow-1]}`+`${columns[indexColumn+2]}`,
                move4: `${rows[indexRow+1]}`+`${columns[indexColumn+2]}`,
                move5: `${rows[indexRow-2]}`+`${columns[indexColumn+1]}`,
                move6: `${rows[indexRow-2]}`+`${columns[indexColumn-1]}`,
                move7: `${rows[indexRow-1]}`+`${columns[indexColumn-2]}`,
                move8: `${rows[indexRow+1]}`+`${columns[indexColumn-2]}`
            }
            let position_test_kW = scan(move_kW)
            return position_test_kW
            break;
        case 'knightdark':
            console.log(piece)
            break;
        case 'bishopwhite':
            console.log(piece)
            break;
        case 'bishopdark':
            console.log(piece)
            break;    
        case 'rookwhite':
            console.log(piece)
            break;
        case 'rookdark':
            console.log(piece)
            break;
        case 'queenwhite':
            console.log(piece)
            break;
        case 'queendark':
            console.log(piece)
            break;
        case 'kingwhite':
            console.log(piece)
            break;
        case 'kingdark':
            console.log(piece)
            break;
        default:
            console.log("erro404")
            break;
    }
}
function scan(moves){
    let tested = {}
    for (let mov in moves){
        let moviment_test = moves[mov]
        let row = moviment_test[0]
        let column = moviment_test[1]
        if (row != 'u' && column != 'u' && moviment_test != 'undefinedundefined'){
            if (chessBoard[row][column-1] == ''){
                tested[mov] = moves[mov]
            }
        }
    }
    console.log(tested)
    return tested
}
function is_empty(objt){
    let len = 0
    for (let prop in objt){
        len += 1
    }
    if (len > 0){
        return true
    }else{
        return false
    }
}