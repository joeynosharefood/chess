var kingwhite = ''
var kingdark = ''
function dataEntry(pos, color, test=true){
    if (test == true){
        historic_data(pos, color)
    }
    switch (color) {
        case 'kingwhite':
            kingwhite = pos
            break;
        case 'kingdark':
            kingdark = pos
        default:
            break;
    }
    let row = pos[0]
    let column = pos[1]-1
    if (color.indexOf('white') != -1){
        chessBoard[row][column] = 'white'
    }else{
        chessBoard[row][column] = 'dark'
    }
}
function dataRemove(pos){
    let row = pos[0]
    let column = pos[1]-1
    chessBoard[row][column] = ''
}
function scan(moves, color, pos){
    let piece_color = ''
    if (color.indexOf('white') != -1){
        piece_color = 'white'
    }else if (color.indexOf('dark') != -1){
        piece_color = 'dark'
    }
    let moves_possibilyts
    let cont_mov = 1 
    let row = moves[0]
    let column = moves[1]
    if (row != 'u' && column != 'u' && moves != 'undefinedundefined'){
        test = false
        if (chessBoard[row][column-1] == '' && chessBoard[row][column-1] != piece_color){
            if (chessBoard[row][column-1] == ''){
                test = true
                moves_possibilyts = `${moves}`
                cont_mov += 1
            }
        }
    }else{
        test = false
    }
    if (test == true){
        render_possibiltys(moves_possibilyts, color, piece_color, pos)
    }else{
        return false
    }    
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
function big_moves(move, piece, pos){
    let piece_color = ''
    if (piece.indexOf('white') != -1){
        piece_color = 'white'
    }else if (piece.indexOf('dark') != -1){
        piece_color = 'dark'
    }
    opost_color = piece_color == 'white' ? 'dark' : 'white'
    for (let moves in move){
        let moviment = move[moves]
        let row = moviment[0]
        let column = moviment[1]
        if (row != 'u' && column != 'u' && moves != 'undefinedundefined'){
            if (chessBoard[row][column-1] == '' && chessBoard[row][column-1] != piece_color){
                if (chessBoard[row][column-1] == ''){
                    scan(moviment, piece, pos)
                }else{
                    break
                }
            }else if (chessBoard[row][column-1] == opost_color){
                eat_moves(moviment, piece, pos)
                break
            }
            else{
                break
            }
        }else{
            break
        }
    }
}
function eat_moves(moves, piece, position){
    let color
    if (piece.indexOf('white') != -1){
        color = 'white'
    }else if (piece.indexOf('dark') != -1){
        color = 'dark'
    }
    sheik(moves, piece)
    if (turn == color){
        let img  = `<img src='../img/eat-box.png' class='eat-box' onclick='eat("${moves}", "${piece}"); add_class_remove("${position}")'>`
        document.getElementById(`square-${moves}`).innerHTML += img
    }else{
        return false
    }
}
function eat(moves, piece){
    dataEntry(`${moves}`, `${piece}`)
    let new_position = `<img src="../img/${piece}.png" class="${piece} ${moves}" onclick="clean_box(); piece_per_piece('${piece}', '${moves}')">`
    document.getElementById(`square-${moves}`).innerHTML = new_position
    change_turn()
}
function historic_data(pos, color){
    let opt = `<option value="play-${pos}">${color} na ${pos}</option>`
    document.getElementById('historic').innerHTML += opt
}