import React from "react";
import Board from "./models/Board";

interface SingleBoardProps {
    board: Board
}

const SingleBoard: React.FC<SingleBoardProps> = ({board}) => {
    //const [edit, setEdit] = React.useState<boolean>(false)

    return (
        <div className="board">
            <img src={`/images/${board.img}`} alt={board.title} />
            <h2>{board.title}</h2>
            <span>{board.price}</span>

            <div className="board-controls">

           </div>
        </div>
    )
}
export default SingleBoard;