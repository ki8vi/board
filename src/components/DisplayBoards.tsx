import React from "react";
import Board from "./models/Board";
import SingleBoard from "./SingleBoard";

interface DisplayBoardsProps {
    boardList: Board[];

}
const DisplayBoards: React.FC<DisplayBoardsProps> = ({boardList}) => {

    return (
        <div className="container">
            {boardList.map((board) => {
                return <SingleBoard board={board} key={board.id}/>
            })}
        </div>
    )
}
export default DisplayBoards;