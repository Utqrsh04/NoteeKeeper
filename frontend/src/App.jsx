import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./Screens/LandingPage/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import MyNotes from "./Screens/MyNotes/MyNotes";
const App = () => (
  <>
    <BrowserRouter>
      <Header />
      <div className="container w-full md:px-36 px-2 mx-auto py-5">
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/mynotes">
          <MyNotes />
        </Route>
      </div>
      <Footer />
    </BrowserRouter>
  </>
);
export default App;
