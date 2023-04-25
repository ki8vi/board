import React from 'react';
import AddBoard from './components/AddBoard';
import Board from './components/models/Board';
import DisplayBoards from './components/DisplayBoards';

const App: React.FC = () => {
  const [boardList, setBoardList] = React.useState<Board[]>([]);

  const addBoard = (newBoard: Board) => {
    setBoardList([...boardList, newBoard]);
  }
  const updateBoard = (newBoard: Board) => {
    setBoardList(boardList.map(board => board.id === newBoard.id ? newBoard : board));
  }
  const deleteBoard = (id:number) => {
    const newBoardList = boardList.filter(board => board.id !== id)
    setBoardList(newBoardList)
  }
  return (
    <div className="App">
      <div className="wrap">
        <span>Доска объявлений</span>
        <AddBoard 
          addBoard={addBoard}
        />
        <DisplayBoards
          boardList = {boardList}
          updateBoard={updateBoard}
          deleteBoard={deleteBoard}
        />
      </div>
    </div>
  );
}

export default App;
