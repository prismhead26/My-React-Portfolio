import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

export default function App({ style }) {
  return (
    <main className="main-content">
      <Nav />
        <div style={ style }>
            <Outlet />
      </div>
    </main>
  );
}
