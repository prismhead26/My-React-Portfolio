import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

// App component to render the Nav component and the Outlet component
export default function App({ style }) {
  return (
    <main className="main-content" style={ style }>
      <Nav />
        <div >
            <Outlet />
      </div>
    </main>
  );
}
