import './App.css';

function App() {
  return (
    <div className="text-center" style="margin-top:10%;">
      <img src="https://api.qrserver.com/v1/create-qr-code/?size=1024x1024&data=https://www.linkedin.com/in/awaisiftikhar90/" className="img-fluid" style="width:200px;"/>
      <br/><br/>
      <h1>Awais Iftikhar</h1>
      <h4>Software Engineer</h4>
      <h4>Scan me to connect!</h4> 
    </div>
  );
}

export default App;
