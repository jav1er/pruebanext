import classnames from "classnames";
import Header from "../components/Header/Header";
import Form from "../components/Form/Form.js"

export default function Layout(comp) {
  const { children, className } = comp;

  return (
    <div className={classnames("layout", { [className]: className })}>
      <Header />
      <div className="content">{children}</div>
    <Form/>
    </div>
  );
}
