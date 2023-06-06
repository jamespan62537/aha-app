import NavBar from "../NavBar";

const Layout = ({ children }) => {
  return (
    <main className="flex h-full w-full flex-col bg-black-primary md:flex-row">
      <NavBar />
      <section className="scroll-hidden flex-1 overflow-y-scroll">{children}</section>
    </main>
  );
};

export default Layout;
