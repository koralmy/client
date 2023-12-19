import "./App.css";
import PageHeader from "./components/PageHeader";
import Sandbox from "./sandbox/Sandbox";
import Cards from "./cards/components/Card"
import OnClick from "./sandbox/events/Onclick";
import CardsPage from "./cards/pages/CardsPage";
import AboutPage from "./pages/AboutPage";
import UseState from "./sandbox/hooks/UseState";
import CardComponen from "./sandbox/mui-sandbox/CardComponent"
import SetPost from "./sandbox/hooks/SetPost";
import Layout from "./layout/Layout";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
