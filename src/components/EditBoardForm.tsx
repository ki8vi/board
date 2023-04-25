import React from "react";
import Board from "./models/Board";
interface EditBoardFormProps {
    data: Board;
    updateBoard: (newBoard: Board) => void;
    handleEdit: () => void;
    
}
const EditBoardForm: React.FC<EditBoardFormProps> = ({data, updateBoard, handleEdit}) => {
    const [editBoard, setEditBoard] = React.useState<Board>(data)

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setEditBoard({
            ...editBoard, [name]: value
        })
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const {title, price, img} = editBoard;
        if(title && price && img) {
            updateBoard(editBoard)
            handleEdit()
        }
    }
    return (
        <form onSubmit={handleSubmit}>
        <input 
        name="title"
        type="text"
        placeholder="Название"
        onChange={handleChange}
        value={editBoard.title}
        />
        <input 
        name="price"
        type="text"
        placeholder="Стоимость"
        onChange={handleChange}
        value={editBoard.price}
        />
        <input 
        name="img"
        type="text"
        placeholder="Изображение"
        onChange={handleChange}
        value={editBoard.img}
        />
        <button type="submit">
            Редактировать
        </button>
    </form>
    )
}
export default EditBoardForm;
