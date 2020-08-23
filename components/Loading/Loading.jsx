import Style from "./Loading.module.scss";

const Loading = (props) => {
  return (
    <>
      <div className={Style.loadingpage}>
        <div className={Style.Box}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default Loading;
