const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const columns = ['1', '2', '3', '4', '5', '6', '7', '8']
var turn = 'white'
function render_possibiltys(moves, piece, color, position){
    if (color == turn){
        let select_box = `<img src="../img/select-box.png" class='select-box' id='select-box' onclick="moviment('${moves}', '${piece}'); add_class_remove('${position}')">`
        document.getElementById(`square-${moves}`).innerHTML = select_box 
    }else{
        return false
    }
}
function moviment(move, piece){
    if (piece.indexOf('white') != -1){
        color = 'white'
    }else{
        color = 'dark'
    }
    if (piece == 'pawnwhite' || piece == 'pawndark'){
        dataEntry(`${move}`, `${piece}`)
        let new_position = `<img src="../img/${piece}.png" class="${piece} ${move}" onclick="clean_box(); piece_per_piece('${piece}', '${move}', false)">`
        document.getElementById(`square-${move}`).innerHTML = new_position
        change_turn()
    }else{
        dataEntry(`${move}`, `${piece}`)
        let new_position = `<img src="../img/${piece}.png" class="${piece} ${move}" onclick="clean_box(); piece_per_piece('${piece}', '${move}')">`
        document.getElementById(`square-${move}`).innerHTML = new_position
        change_turn()
    }
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
        $('.eat-box').remove()
    }
}
function clean_box(){
    let body = document.querySelector('body')
    for (let child in body){
        $('.select-box').remove()
    }
}
function strainght_line_up(indexRow, indexColumn, piece){
    let i = 1
    let row_test = {}
    indexRow += 1
    for (let row in rows){
        row_test[`move${i}`] = `${rows[indexRow]}${columns[indexColumn]}`
        indexRow += 1
        i ++
    }
    return row_test
}
function strainght_line_down(indexRow, indexColumn, piece){
    let i = 1
    let row_test = {}
    indexRow -= 1
    for (let row in rows){
        row_test[`move${i}`] = `${rows[indexRow]}${columns[indexColumn]}`
        indexRow -= 1
        i ++
    }
    return row_test
}
function horizon_lines_right(indexRow, indexColumn, piece){
    let i = 1
    let column_test = {}
    let test_stp = Number(columns[indexColumn])
    indexColumn += 1
    for (let column in columns){
        column_test[`move${i}`] = `${rows[indexRow]}`+`${columns[indexColumn]}`
        indexColumn += 1 
        i ++
    }
    return column_test
}
function horizon_lines_left(indexRow, indexColumn, piece){
    let i = 1
    let column_test = {}
    let test_stp = Number(columns[indexColumn])
    indexColumn -= 1
    for (let column in columns){
        column_test[`move${i}`] = `${rows[indexRow]}`+`${columns[indexColumn]}`
        indexColumn -= 1 
        i ++
    }
    return column_test
}
function move_axis_w(indexRow, indexColumn, piece){
    let i = 1
    let axis_w_test = {}
    let column_axy_w = indexColumn
    let column_number = Number(column_axy_w)
    indexRow += 1
    for (let row in rows){
        axis_w_test[`move${i}`] = `${rows[indexRow]}${column_number}`
        column_number -= 1
        indexRow += 1 
        i ++
        if (column_number == 0){
            break
        }
    }
    return axis_w_test
}
function move_axis_x(indexRow, indexColumn, piece){
    let i = 1
    let axis_x_test = {}
    let column_axy_x = columns[indexColumn]
    let column_number = Number(column_axy_x)
    for (let row in rows){
        column_number += 1 
        indexRow += 1
        axis_x_test[`move${i}`] = `${rows[indexRow]}${column_number}`
        i ++
        if (column_number > 9){
            break
        }
    }
    return axis_x_test
}
function move_axis_y(indexRow, indexColumn, piece){
    let i = 1
    let axis_y_test = {}
    let column_axy_y = indexColumn
    let column_number = Number(column_axy_y)
    indexRow -= 1 
    for (let row in rows){
        axis_y_test[`move${i}`] = `${rows[indexRow]}${column_number}`
        column_number -= 1
        indexRow -= 1 
        i ++
        if (column_number == 0){
            break
        }
    }
    return axis_y_test
}
function move_axis_z(indexRow, indexColumn, piece){
    let i = 1
    let axis_z_test = {}
    let column_axy_z = indexColumn+1
    let column_number = Number(column_axy_z)
    for (let row in rows){
        column_number += 1
        indexRow -= 1 
        axis_z_test[`move${i}`] = `${rows[indexRow]}${column_number}`
        i ++        
        if (column_number == 0){
            break
        }
    }
    return axis_z_test
}
function sheik(moves, piece){
    if (moves == kingdark || moves == kingwhite){
        alert('Xeque')
    }
}
function checkMate(){
    alert('Xeque-Mate')
}