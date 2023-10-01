import { Space } from "antd";
import "./App.css";
import Content from "./Component/appContent/Content";
import Header from "./Component/appHeader/Header";
import Sidebar from "./Component/appSidebar/Sidebar";
import Footer from "./Component/appFooter/Footer";

function App() {
  

  return (
    <div className="App">
      <Header />
      <Space className="SideMenuAndAppContent">
        <Sidebar />
        <Content />
      </Space>

      <Footer />
    </div>
  );
}

export default App;
