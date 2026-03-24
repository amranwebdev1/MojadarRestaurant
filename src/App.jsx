import { useState, useEffect } from "react";

import Header from "./Components/Header";
import Routers from "./Routers";
import Footer from "./Components/Footer";
import FirstLoading from "./Components/FirstLoading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate initial API load or first render delay
    const timer = setTimeout(() => setLoading(false), 1500); // 2.5 sec
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <FirstLoading /> // full-screen loader
      ) : (
        <main className="container overflow-x-hidden bg-white">
          <Header />
          <Routers />
          <Footer />
        </main>
      )}
    </>
  );
}

export default App;