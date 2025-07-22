import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

// 컴포넌트 import (경로는 실제 위치에 따라 수정하세요)
import BoardListComp from './components/BoardListComp';
import BoardInsertComp from './components/BoardInsertComp';
import BoardViewComp from './components/BoardViewComp';
import BoardUpdateComp from './components/BoardUpdateComp';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path='/' element={<BoardListComp />} />
            <Route path='/api/board' element={<BoardListComp />} />
            <Route path='/api/insert-board' element={<BoardInsertComp />} />
            <Route path='/api/view-board/:seq' element={<BoardViewComp />} />
            <Route path='/api/update-board/:seq' element={<BoardUpdateComp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
