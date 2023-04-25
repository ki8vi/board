import React from "react";
import Board from "./models/Board";
import {AiFillEdit, AiFillDelete} from "react-icons/ai"
import EditBoardForm from "./EditBoardForm";

interface SingleBoardProps {
    board: Board;
    updateBoard: (newBoard: Board) => void;
    deleteBoard: (id:number) => void;
}

const SingleBoard: React.FC<SingleBoardProps> = ({board, updateBoard, deleteBoard}) => {
    const [edit, setEdit] = React.useState<boolean>(false)

    const handleEdit = () => {
        setEdit(!edit)
    }

    return (
        <div className="board">
            <img src={`/images/${board.img}`} alt={board.title} />
            <h2>{board.title}</h2>
            <span>{board.price}</span>

            <div className="board-controls">
            <AiFillEdit onClick={handleEdit}/> <AiFillDelete onClick={()=>deleteBoard(board.id)}/>
           </div>
           {edit
           ? <EditBoardForm data={board} updateBoard={updateBoard} handleEdit={handleEdit} /> : null}
        </div>
    )
}
export default SingleBoard;