import CreateUser from "./components/user/CreateUser";
import EditUser from "./components/user/EditUser";
import RetriveUser from "./components/user/RetrieveUser";
import RemoveUser from "./components/user/RemoveUser";
import UsersList from "./components/user/UsersList";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/:userId" element={<RetriveUser />} />
          <Route path="/edit/:userId" element={<EditUser />} />
          <Route path="/remove/:userId" element={<RemoveUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
