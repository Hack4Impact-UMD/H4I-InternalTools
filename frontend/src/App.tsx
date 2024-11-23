import { Route, Routes } from 'react-router-dom';

import StatusPage from './components/status/StatusPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <StatusPage /> }></Route>
        <Route path="/application" element={ <StatusPage /> }></Route>
        <Route path="/status" element={ <StatusPage /> }></Route>
      </Routes>
    </>
  )
}

export default App;