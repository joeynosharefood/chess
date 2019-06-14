const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const column = [1, 2, 3, 4, 5, 6, 7, 8]
var turn = 'white'
function scanner(piece, pos){
    let row = pos[0]
    let column = pos[1]
    let index = rows.indexOf(row)
    switch (piece) {
        case 'pawnwhite':
            let pawnwhite = {
                move1: rows[index+1]+`${column}`,
                move2: rows[index+2]+`${column}`
            }
            render_possibiltys(pawnwhite, piece, 'white', pos)
            break;
        case 'pawndark':
            let pawndark = {
                move1: rows[index-1]+`${column}`,
                move2: rows[index-2]+`${column}`
            }
            render_possibiltys(pawndark, piece, 'dark', pos)
            break;
        default:
            break;
    } 
}
function render_possibiltys(moves, piece, color, position){
    if (color == turn){
        for (let mov in moves){
            let select_box = `<img src="../img/select-box.png" class='select-box' id="select-box" onclick="moviment('${moves[mov]}', '${piece}'); add_class_remove('${position}')">`
            document.getElementById(`square-${moves[mov]}`).innerHTML = select_box
        }
    }else{
        return false
    }
}
function moviment(move, piece){
    let new_position = `<img src="../img/${piece}.png" class="${piece} ${move}" onclick="scanner('${piece}', '${move}')">`
    document.getElementById(`square-${move}`).innerHTML = new_position
    change_turn()
}
function change_turn(){
    turn = turn == 'white' ? 'dark': 'white'
    let img = document.querySelector('#turn')
    img.src = `../img/${turn}.png`
    document.getElementById('select-box').remove()
}
function add_class_remove(position){
    let element_for_remove = document.querySelector(`.${position}`)
    element_for_remove.remove()
}