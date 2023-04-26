import React from "react";
import Board from "./models/Board";
interface addBoardProps {
    addBoard: (newBoard:Board) => void
}

const initState = {
    title: "",
    price: "",
    img: ""
}
const AddBoard: React.FC<addBoardProps> = ({addBoard}) => {
    const [newBoard, setNewBoard] = React.useState<{title: string, price: string, img: string}>(initState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setNewBoard({
            ...newBoard, [name]: value 
        })
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const {title, price, img} = newBoard;
        if(title && price && img) {
            addBoard({
                title,
                img,
                price: Number(price),
                id: Date.now()
            })
            setNewBoard(initState)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
            name="title"
            type="text"
            placeholder="Название"
            onChange={handleChange}
            value={newBoard.title}
            />
            <input 
            name="price"
            type="text"
            placeholder="Стоимость"
            onChange={handleChange}
            value={newBoard.price}
            />
            <input 
            name="img"
            type="text"
            placeholder="Описание"
            onChange={handleChange}
            value={newBoard.img}
            />
            <button type="submit">
                + Добавить
            </button>
        </form>
    )
}
export default AddBoard;