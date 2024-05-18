import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// App component to render the Nav component and the Outlet component
export default function App({ style }) {
  return (
    <main className="main-content" style={ style }>
      <Nav />
        <section >
            <Outlet />
      </section>
      <section className="my-3">
        <Footer />
      </section>
    </main>
  );
}
