import React from "react";
import Board from "./models/Board";
import SingleBoard from "./SingleBoard";

interface DisplayBoardsProps {
    boardList: Board[];
    updateBoard: (newBoard: Board) => void;
    deleteBoard: (id:number) => void;

}
const DisplayBoards: React.FC<DisplayBoardsProps> = ({boardList, updateBoard, deleteBoard}) => {

    return (
        <div className="container">
            {boardList.map((board) => {
                return <SingleBoard board={board} key={board.id} updateBoard={updateBoard} deleteBoard={deleteBoard}/>
            })}
        </div>
    )
}
export default DisplayBoards;