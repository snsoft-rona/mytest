import logo from './logo.svg';
import './App.css';

import WebApp from '@twa-dev/sdk'

function App() {
  const handleClick = async () => {
    // WebApp.MainButton = 'Pay';
    // WebApp.MainButton.show();
    // console.log(WebApp.version);
    // WebApp.showAlert('test')
    // WebApp.MainButton.setText("New Button Text").show()

    const command = '/verify';
    const user = WebApp.initDataUnsafe.user;
    if (!user) return alert("User data not available!");

    const BOT_TOKEN = "7589369274:AAGeuAwHw6lHz2sXotR2P9MzxI0FqWLGNj4"; // Replace with your bot's token

    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: user.id,
            text: command
        })
    });

    const result = await response.json();
    console.log("Bot response:", result);
  }

  return (
    <div className="App">
      <button onClick={() => handleClick()}>
            Verify
        </button>
    </div>
  );
}

export default App;
