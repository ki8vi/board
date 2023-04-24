import React from 'react';
import AddBoard from './components/AddBoard';
import Board from './components/models/Board';
import DisplayBoards from './components/DisplayBoards';

const App: React.FC = () => {
  const [boardList, setBoardList] = React.useState<Board[]>([]);

  const addBoard = (newBoard: Board) => {
    setBoardList([...boardList, newBoard]);
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
        />
      </div>
    </div>
  );
}

export default App;
