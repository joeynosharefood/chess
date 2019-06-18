function piece_per_piece(piece, pos, firstmove=true){
    let row = pos[0]
    let column = pos[1]
    let indexRow = rows.indexOf(row)
    let indexColumn = columns.indexOf(column)
    switch (piece) {
        case 'pawnwhite':
            if (firstmove ==  false){
                let move_pW1 = `${rows[indexRow+1]}`+`${columns[indexColumn]}`
                scan(move_pW1, piece, pos)
            }else{
                let move_pW1 = `${rows[indexRow+1]}`+`${columns[indexColumn]}`
                let move_pW2 = `${rows[indexRow+2]}`+`${columns[indexColumn]}`
                scan(move_pW1, piece, pos)
                scan(move_pW2, piece, pos)
            }
            
            break;
        case 'pawndark':
            if (firstmove == false){
                let move_pB1 = `${rows[indexRow-1]}`+`${columns[indexColumn]}`
                scan(move_pB1, piece, pos)
            }else{
                let move_pB1 = `${rows[indexRow-1]}`+`${columns[indexColumn]}`
                let move_pB2 = `${rows[indexRow-2]}`+`${columns[indexColumn]}`
                scan(move_pB1, piece, pos)
                scan(move_pB2, piece, pos)
            }
            break; 
        case 'knightwhite':
            let move_kW1 = `${rows[indexRow+2]}`+`${columns[indexColumn+1]}`
            let move_kW2 = `${rows[indexRow+2]}`+`${columns[indexColumn-1]}` 
            let move_kW3 = `${rows[indexRow-1]}`+`${columns[indexColumn+2]}`
            let move_kW4 = `${rows[indexRow+1]}`+`${columns[indexColumn+2]}`
            let move_kW5 = `${rows[indexRow-2]}`+`${columns[indexColumn+1]}`
            let move_kW6 = `${rows[indexRow-2]}`+`${columns[indexColumn-1]}`
            let move_kW7 = `${rows[indexRow-1]}`+`${columns[indexColumn-2]}`
            let move_kW8 = `${rows[indexRow+1]}`+`${columns[indexColumn-2]}`
            scan(move_kW1, piece, pos)
            scan(move_kW2, piece, pos)
            scan(move_kW3, piece, pos)
            scan(move_kW4, piece, pos)
            scan(move_kW5, piece, pos)
            scan(move_kW6, piece, pos)
            scan(move_kW7, piece, pos)
            scan(move_kW8, piece, pos)
            break;
        case 'knightdark':
            let move_kB1 = `${rows[indexRow+2]}`+`${columns[indexColumn+1]}`
            let move_kB2 = `${rows[indexRow+2]}`+`${columns[indexColumn-1]}` 
            let move_kB3 = `${rows[indexRow-1]}`+`${columns[indexColumn+2]}`
            let move_kB4 = `${rows[indexRow+1]}`+`${columns[indexColumn+2]}`
            let move_kB5 = `${rows[indexRow-2]}`+`${columns[indexColumn+1]}`
            let move_kB6 = `${rows[indexRow-2]}`+`${columns[indexColumn-1]}`
            let move_kB7 = `${rows[indexRow-1]}`+`${columns[indexColumn-2]}`
            let move_kB8 = `${rows[indexRow+1]}`+`${columns[indexColumn-2]}`
            scan(move_kB1, piece, pos)
            scan(move_kB2, piece, pos)
            scan(move_kB3, piece, pos)
            scan(move_kB4, piece, pos)
            scan(move_kB5, piece, pos)
            scan(move_kB6, piece, pos)
            scan(move_kB7, piece, pos)
            scan(move_kB8, piece, pos)
            break;
        case 'bishopwhite':
            let movebW1 = move_axis_w(indexRow, indexColumn, piece)
            let movebW2 = move_axis_x(indexRow, indexColumn, piece)
            let movebW3 = move_axis_y(indexRow, indexColumn, piece)
            let movebW4 = move_axis_z(indexRow, indexColumn, piece)
            big_moves(movebW1, piece, pos)
            big_moves(movebW2, piece, pos)
            big_moves(movebW3, piece, pos)
            big_moves(movebW4, piece, pos)
            break;
        case 'bishopdark':
            let movebB1 = move_axis_w(indexRow, indexColumn, piece)
            let movebB2 = move_axis_x(indexRow, indexColumn, piece)
            let movebB3 = move_axis_y(indexRow, indexColumn, piece)
            let movebB4 = move_axis_z(indexRow, indexColumn, piece)
            big_moves(movebB1, piece, pos)
            big_moves(movebB2, piece, pos)
            big_moves(movebB3, piece, pos)
            big_moves(movebB4, piece, pos)
            break;    
        case 'rookwhite':
            let moverW1 = strainght_line_up(indexRow, indexColumn, piece)
            let moverW2 = horizon_lines_right(indexRow, indexColumn, piece)
            let moverW3 = strainght_line_down(indexRow, indexColumn, piece)
            let moverW4 = horizon_lines_left(indexRow, indexColumn, piece)
            big_moves(moverW1, piece, pos)
            big_moves(moverW2, piece, pos)
            big_moves(moverW3, piece, pos)
            big_moves(moverW4, piece, pos)
            break;
        case 'rookdark':
            let moverB1 = strainght_line_up(indexRow, indexColumn, piece)
            let moverB2 = horizon_lines_right(indexRow, indexColumn, piece)
            let moverB3 = strainght_line_down(indexRow, indexColumn, piece)
            let moverB4 = horizon_lines_left(indexRow, indexColumn, piece)
            big_moves(moverB1, piece, pos)
            big_moves(moverB2, piece, pos)
            big_moves(moverB3, piece, pos)
            big_moves(moverB4, piece, pos)
            break;
        case 'queenwhite':
            let moveqW1 = strainght_line_up(indexRow, indexColumn, piece)
            let moveqW2 = horizon_lines_right(indexRow, indexColumn, piece)
            let moveqW3 = strainght_line_down(indexRow, indexColumn, piece)
            let moveqW4 = horizon_lines_left(indexRow, indexColumn, piece)
            let moveqW5 = move_axis_w(indexRow, indexColumn, piece)
            let moveqW6 = move_axis_x(indexRow, indexColumn, piece)
            let moveqW7 = move_axis_y(indexRow, indexColumn, piece)
            let moveqW8 = move_axis_z(indexRow, indexColumn, piece)
            big_moves(moveqW1, piece, pos)
            big_moves(moveqW2, piece, pos)
            big_moves(moveqW3, piece, pos)
            big_moves(moveqW4, piece, pos)
            big_moves(moveqW5, piece, pos)
            big_moves(moveqW6, piece, pos)
            big_moves(moveqW7, piece, pos)
            big_moves(moveqW8, piece, pos)
            break;
        case 'queendark':
            let moveqB1 = strainght_line_up(indexRow, indexColumn, piece)
            let moveqB2 = horizon_lines_right(indexRow, indexColumn, piece)
            let moveqB3 = strainght_line_down(indexRow, indexColumn, piece)
            let moveqB4 = horizon_lines_left(indexRow, indexColumn, piece)
            let moveqB5 = move_axis_w(indexRow, indexColumn, piece)
            let moveqB6 = move_axis_x(indexRow, indexColumn, piece)
            let moveqB7 = move_axis_y(indexRow, indexColumn, piece)
            let moveqB8 = move_axis_z(indexRow, indexColumn, piece)
            big_moves(moveqB1, piece, pos)
            big_moves(moveqB2, piece, pos)
            big_moves(moveqB3, piece, pos)
            big_moves(moveqB4, piece, pos)
            big_moves(moveqB5, piece, pos)
            big_moves(moveqB6, piece, pos)
            big_moves(moveqB7, piece, pos)
            big_moves(moveqB8, piece, pos)
            break;
        case 'kingwhite':
            let movekW1 = `${rows[indexRow+1]}${columns[indexColumn]}`
            let movekW2 = `${rows[indexRow+1]}${columns[indexColumn+1]}`
            let movekW3 = `${rows[indexRow]}${columns[indexColumn+1]}`
            let movekW4 = `${rows[indexRow-1]}${columns[indexColumn+1]}`
            let movekW5 = `${rows[indexRow-1]}${columns[indexColumn]}`
            let movekW6 = `${rows[indexRow-1]}${columns[indexColumn-1]}`
            let movekW7 = `${rows[indexRow]}${columns[indexColumn-1]}`
            let movekW8 = `${rows[indexRow+1]}${columns[indexColumn-1]}`
            scan(movekW1, piece, pos)
            scan(movekW2, piece, pos)
            scan(movekW3, piece, pos)
            scan(movekW4, piece, pos)
            scan(movekW5, piece, pos)
            scan(movekW6, piece, pos)
            scan(movekW7, piece, pos)
            scan(movekW8, piece, pos)
            break;
        case 'kingdark':
            let movekB1 = `${rows[indexRow+1]}${columns[indexColumn]}`
            let movekB2 = `${rows[indexRow+1]}${columns[indexColumn+1]}`
            let movekB3 = `${rows[indexRow]}${columns[indexColumn+1]}`
            let movekB4 = `${rows[indexRow-1]}${columns[indexColumn+1]}`
            let movekB5 = `${rows[indexRow-1]}${columns[indexColumn]}`
            let movekB6 = `${rows[indexRow-1]}${columns[indexColumn-1]}`
            let movekB7 = `${rows[indexRow]}${columns[indexColumn-1]}`
            let movekB8 = `${rows[indexRow+1]}${columns[indexColumn-1]}`
            scan(movekB1, piece, pos)
            scan(movekB2, piece, pos)
            scan(movekB3, piece, pos)
            scan(movekB4, piece, pos)
            scan(movekB5, piece, pos)
            scan(movekB6, piece, pos)
            scan(movekB7, piece, pos)
            scan(movekB8, piece, pos)
            break;
        default:
            console.log("erro404")
            break;
    }
}