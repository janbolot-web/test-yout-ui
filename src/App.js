import {
  createBrowserRouter,
  useLocation,
  useOutlet,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import PersonalPage from "./pages/PersonalPage";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { createRef } from "react";

const routes = [
  { path: "/", name: "Home", element: <HomePage />, nodeRef: createRef() },
  {
    path: "/personal",
    name: "Personal",
    element: <PersonalPage />,
    nodeRef: createRef(),
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes.map((route) => ({
      index: route.path === "/",
      path: route.path === "/" ? undefined : route.path,
      element: route.element,
    })),
  },
]);

function App() {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};
  return (
    <div className="app">
      <Header />
      <div>
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            {(state) => (
              <div ref={nodeRef} className="page">
                {currentOutlet}
              </div>
            )}
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
}

export default App;
