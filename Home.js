import Form from "./components/form/form";
import Header from "./components/ui/Header";
import Logo from "../src/assets/logo.png";
import "../src/style/Home.css"
import { ContextSocketProvider } from "./conntext/contexsocketio";

function Home() {
  return (
    <ContextSocketProvider>
      <div>
        <Header />
        <div className="content_title">
          <h2>SI LLEGA A TUS MANOS,</h2>
          <div>
            <h2>ES </h2>
            <h2 className="active"> OLVA</h2>
          </div>
        </div>
        <div className="content_main">
          <div className="content_description">
            <img src={Logo} alt="logo"></img>
            <p><em>REALIZA TU CONSULTA CON EL NUEVO CHAT-BOT</em></p>
          </div>
          <div className="content_chat_main">
            <div className="chat_title">
              <p className="bolt">Te damos la bienvenida al nuevo ChatBot</p>
              <p>Experimenta tu copiloto para resolver tus consultas</p>
              <div className="linea_separación">
                <div className="linea"></div>
                <div className="triangulo"></div>
              </div>
            </div>
            <Form />
          </div>
        </div>

      </div>
    </ContextSocketProvider>
  );
}

export default Home;
