import "./App.css";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Router } from "react-router-dom";
import { Switch } from "react-router-dom";
import Login from "./Page/Dang Nhap/Login";
import Register from "./Page/Dang Ki/Register";
import TrangChu from "./Page/Trang Chu/TrangChu";
import ProgressBar from "@badrap/bar-of-progress"
import ChiTietPhong from "./Page/ChiTietPhong/ChiTietPhong";
import SearchLo from "./Page/Search/search";
import Trips from "./Page/Trang Chu/Trips/Trips/Trips";


const progress=new ProgressBar({
  size:4,
  color:"#FE595E",
  className:"z-50",
  delay:100,
});
progress.start();
setTimeout(() => {
  progress.finish();
}, 1000);

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" exact component={TrangChu} />
          <Route path="/search" component={SearchLo} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/detail/:id" component={ChiTietPhong} />
        <Route path="/trips/:id" component={Trips} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
