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
            let position_test_pW = scan(move_pW)
            return position_test_pW
            break;
        case 'pawndark':
            let move_pB = {
                move1: `${rows[indexRow-1]}`+`${columns[indexColumn]}`,
                move2: `${rows[indexRow-2]}`+`${columns[indexColumn]}`
            }
            let position_test_pB = scan(move_pB)
            return position_test_pB
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
            let move_kB = {
                move1: `${rows[indexRow+2]}`+`${columns[indexColumn+1]}`,
                move2: `${rows[indexRow+2]}`+`${columns[indexColumn-1]}`, 
                move3: `${rows[indexRow-1]}`+`${columns[indexColumn+2]}`,
                move4: `${rows[indexRow+1]}`+`${columns[indexColumn+2]}`,
                move5: `${rows[indexRow-2]}`+`${columns[indexColumn+1]}`,
                move6: `${rows[indexRow-2]}`+`${columns[indexColumn-1]}`,
                move7: `${rows[indexRow-1]}`+`${columns[indexColumn-2]}`,
                move8: `${rows[indexRow+1]}`+`${columns[indexColumn-2]}`
            }
            let position_test_kB = scan(move_kB)
            return position_test_kB
            break;
        case 'bishopwhite':
            let movebW = {
                move3 :  move_axis_x(indexRow, indexColumn),
                move4 :  move_axis_w(indexRow, indexColumn),
                move5 :  move_axis_z(indexRow, indexColumn),
                move6 :  move_axis_y(indexRow, indexColumn)}
            bigger_Moves(movebW, 'bishopwhite', 'white', `${rows[indexRow]}${columns[indexColumn]}`)
            break;
        case 'bishopdark':
            let movebB = {
                move3 :  move_axis_x(indexRow, indexColumn),
                move4 :  move_axis_w(indexRow, indexColumn),
                move5 :  move_axis_z(indexRow, indexColumn),
                move6 :  move_axis_y(indexRow, indexColumn)}
            bigger_Moves(movebB, 'bishopdark', 'dark', `${rows[indexRow]}${columns[indexColumn]}`)
            break;    
        case 'rookwhite':
            let moverW = {
                move1 :  strainght_line(indexColumn),
                move2 :  horizon_lines(indexRow),}
            bigger_Moves(moverW, 'rookwhite', 'white', `${rows[indexRow]}${columns[indexColumn]}`)
            break;
        case 'rookdark':
            console.log('1')
            let moverB = {
                move1 :  strainght_line(indexColumn),
                move2 :  horizon_lines(indexRow),}
            bigger_Moves(moverB, 'rookdark', 'dark', `${rows[indexRow]}${columns[indexColumn]}`)
            break;
        case 'queenwhite':
            let moveqW = {
                move1 :  strainght_line(indexColumn),
                move2 :  horizon_lines(indexRow),
                move3 :  move_axis_x(indexRow, indexColumn),
                move4 :  move_axis_w(indexRow, indexColumn),
                move5 :  move_axis_z(indexRow, indexColumn),
                move6 :  move_axis_y(indexRow, indexColumn)}
            bigger_Moves(moveqW, 'queenwhite', 'white', `${rows[indexRow]}${columns[indexColumn]}`)
            break;
        case 'queendark':
            let moveqB = {
                move1 :  strainght_line(indexColumn),
                move2 :  horizon_lines(indexRow),
                move3 :  move_axis_x(indexRow, indexColumn),
                move4 :  move_axis_w(indexRow, indexColumn),
                move5 :  move_axis_z(indexRow, indexColumn),
                move6 :  move_axis_y(indexRow, indexColumn)}
            bigger_Moves(moveqB, 'queendark', 'dark', `${rows[indexRow]}${columns[indexColumn]}`)
            break;
        case 'kingwhite':
            let movekW = {
                move1: `${rows[indexRow+1]}${columns[indexColumn]}`,
                move2: `${rows[indexRow+1]}${columns[indexColumn+1]}`,
                move3: `${rows[indexRow]}${columns[indexColumn+1]}`,
                move4: `${rows[indexRow-1]}${columns[indexColumn+1]}`,
                move5: `${rows[indexRow-1]}${columns[indexColumn]}`,
                move6: `${rows[indexRow-1]}${columns[indexColumn-1]}`,
                move7: `${rows[indexRow]}${columns[indexColumn-1]}`,
                move8: `${rows[indexRow+1]}${columns[indexColumn-1]}`
            }
            let position_test_kingWhite = scan(movekW)
            return position_test_kingWhite
            break;
        case 'kingdark':
            let movekB = {
                move1: `${rows[indexRow+1]}${columns[indexColumn]}`,
                move2: `${rows[indexRow+1]}${columns[indexColumn+1]}`,
                move3: `${rows[indexRow]}${columns[indexColumn+1]}`,
                move4: `${rows[indexRow-1]}${columns[indexColumn+1]}`,
                move5: `${rows[indexRow-1]}${columns[indexColumn]}`,
                move6: `${rows[indexRow-1]}${columns[indexColumn-1]}`,
                move7: `${rows[indexRow]}${columns[indexColumn-1]}`,
                move8: `${rows[indexRow+1]}${columns[indexColumn-1]}`
            }
            let position_test_kingBlack = scan(movekB)
            return position_test_kingBlack
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
function strainght_line(indexColumn){
    let i = 1
    let row_test = {}
    for (let row in rows){
        row_test[`move${i}`] = `${rows[row]}${columns[indexColumn]}`
        i ++
    }
    let tested = scan(row_test)
    return tested
}
function horizon_lines(indexRow){
    let i = 1
    let column_test = {}
    for (let column in columns){
        column_test[`move${i}`] = `${rows[indexRow]}${i}`
        i ++ 
    }
    let tested = scan(column_test)
    return tested
}
function move_axis_x(indexRow, indexColumn){
    let i = 1
    let axis_x_test = {}
    let column_axy_x = columns[indexColumn]
    let column_number = Number(column_axy_x)
    for (let row in rows){
        axis_x_test[`move${i}`] = `${rows[indexRow]}${column_number}`
        column_number += 1 
        indexRow += 1
        i ++
        if (column_number > 9){
            break
        }
    }
    let tested = scan(axis_x_test)
    return tested

}
function move_axis_w(indexRow, indexColumn){
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
    let tested = scan(axis_w_test)
    return tested
}
function move_axis_z(indexRow, indexColumn){
    let i = 1
    let axis_z_test = {}
    let column_axy_z = indexColumn+1
    let column_number = Number(column_axy_z)
    for (let row in rows){
        axis_z_test[`move${i}`] = `${rows[indexRow]}${column_number}`
        column_number += 1
        indexRow -= 1 
        i ++
        if (column_number == 0){
            break
        }
    }
    let tested = scan(axis_z_test)
    return tested
}
function move_axis_y(indexRow, indexColumn){
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
    let tested = scan(axis_y_test)
    return tested
}
function bigger_Moves(moves, pieces, color, position){
    for (let prop in moves){
        let provi_moves = moves[prop]
        render_possibiltys(provi_moves, pieces, color, position, true)
    }    
}