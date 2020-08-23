import PublicLayout from "../Layout/PublicLayout";

import { connect } from "react-redux";
import { getItems } from "./../Redux/action/fetchdata.action";
import { wrapper } from "./../Redux/store";

function Home(props) {
  return (
    <>
      <PublicLayout>
        {props.foo.map((item, i) => {
          return <h5 key={i}>{item.title}</h5>;
        })}
      </PublicLayout>
    </>
  );
}
export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  await store.dispatch(getItems());
  // store.dispatch(addCount());
});
// export const getStaticProps = wrapper.getStaticProps(async (ctx) => {
//   async ({ store, preview }) => {
//     await store.dispatch(getItems());
//   };
//   //
// });
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect((state) => state.reducer, mapDispatchToProps)(Home);
