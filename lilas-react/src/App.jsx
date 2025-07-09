import './App.css'


function Header() {
    return <div className="header-section">
        <h1 className="header-text">Lilas</h1>
        <hr style={{borderWidth : '.5px'}}/>
            </div>;
}

function App() {
  return (
    <>
      <div className="main-app-grid">
          <Header />
          <p>Search Drakes Lookbooks for Specific Clothes or Themes</p>
          <p>Season selector here</p>
          <p>Or just Browse...</p>
          <p>images go here</p>
      </div>
    </>
  )
}

export default App
