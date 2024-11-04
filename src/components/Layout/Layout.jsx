import AppBar from "../AppBar/AppBar";

export default function Layout({ children }) {
  return (
    <div>
      <AppBar />
      <div>{children}</div>
    </div>
  );
}
