import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./Screens/LandingPage/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import MyNotes from "./Screens/MyNotes/MyNotes";
import LoginPage from "./Screens/Login/LoginPage";
import SignupPage from "./Screens/Signup/SignupPage";
const App = () => (
  <>
    <BrowserRouter>
      <Header />
      <div className="container w-full md:px-36 px-2 mx-auto py-5">
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/signup" exact>
          <SignupPage />
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
