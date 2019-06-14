const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const columns = ['1', '2', '3', '4', '5', '6', '7', '8']
var turn = 'white'
function scanner(piece, pos){
    let row = pos[0]
    let column = pos[1]
    let indexRow = rows.indexOf(row)
    let indexColumn = columns.indexOf(column)
    switch (piece) {
        case 'pawnwhite':
            let pawnwhite = piece_per_piece(piece, indexRow, indexColumn)        
            render_possibiltys(pawnwhite, piece, 'white', pos)
            break;
        case 'pawndark':
            let pawndark = piece_per_piece(piece, indexRow, indexColumn)
            render_possibiltys(pawndark, piece, 'dark', pos)
            break; 
        case 'knightwhite':
            let knightwhite = piece_per_piece(piece, indexRow, indexColumn)
            render_possibiltys(knightwhite, piece, 'white', pos)  
            break;
        case 'knightdark':
            let knightdark = piece_per_piece(piece, indexRow, indexColumn)   
            render_possibiltys(knightdark, piece, 'dark', pos) 
            break;
        case 'bishopwhite':
            let bishopwhite= piece_per_piece(piece, indexRow, indexColumn)
            render_possibiltys(bishopwhite, piece, 'white', pos) 
            break;
        case 'bishopdark':
            let bishopdark = piece_per_piece(piece, indexRow, indexColumn)
            render_possibiltys(bishopdark, piece, 'dark', pos) 
            break;     
        case 'rookwhite':
            let rookwhite = piece_per_piece(piece, indexRow, indexColumn)
            render_possibiltys(rookwhite, piece, 'white', pos) 
            break;
        case 'rookdark':
            let rookdark = piece_per_piece(piece, indexRow, indexColumn)
            render_possibiltys(rookdark, piece, 'dark', pos) 
            break;
        case 'queenwhite':
            let queenwhite = piece_per_piece(piece, indexRow, indexColumn)
            render_possibiltys(queenwhite, piece, 'white', pos) 
            break;
        case 'queendark':
            let queendark = piece_per_piece(piece, indexRow, indexColumn)
            render_possibiltys(queendark, piece, 'dark', pos) 
            break;
        case 'kingwhite':
            let kingwhite = piece_per_piece(piece, indexRow, indexColumn)
            render_possibiltys(kingwhite, piece, 'white', pos) 
            break;
        case 'kingdark':
            let kingdark = piece_per_piece(piece, indexRow, indexColumn)
            render_possibiltys(kingdark, piece, 'dark', pos) 
            break;
        default:
            console.log("erro404")
            break;
    } 
}
function render_possibiltys(moves, piece, color, position){
    if (color == turn){
        let body = document.querySelector('body')
        for (let child in body){
            $('.select-box').remove()
        }
        for (let mov in moves){
            let select_box = `<img src="../img/select-box.png" class='select-box' id='select-box'onclick="moviment('${moves[mov]}', '${piece}'); add_class_remove('${position}')">`
            document.getElementById(`square-${moves[mov]}`).innerHTML = select_box
        }
    }else{
        return false
    }
}
function moviment(move, piece){
    dataEntry(`${move}`, `${piece}`)
    let new_position = `<img src="../img/${piece}.png" class="${piece} ${move}" onclick="scanner('${piece}', '${move}')">`
    document.getElementById(`square-${move}`).innerHTML = new_position
    change_turn()
}
function change_turn(){
    turn = turn == 'white' ? 'dark': 'white'
    let img = document.querySelector('#turn')
    img.src = `../img/${turn}.png`   
}
function add_class_remove(position){
    dataRemove(`${position}`)
    $(`.${position}`).remove()
    let body = document.querySelector('body')
    for (let child in body){
        $('.select-box').remove()
    }
}