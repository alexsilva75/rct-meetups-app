import cssStyle from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
function Layout(props: any) {
  return (
    <div>
      <MainNavigation />
      <main className={cssStyle.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
