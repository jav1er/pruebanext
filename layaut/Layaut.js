import classnames from "classnames";
import Header from "../components/Header/Header";


export default function Layout(comp) {
  const { children, className } = comp;

  return (
    <div className={classnames("layout", { [className]: className })}>
      <Header />
      <div className="content">{children}</div>
    </div>
  );
}
