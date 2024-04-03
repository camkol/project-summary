import "./Effects.css";
import RenderDemo from "./RenderDemo";
import QuoteFetcher from "./QuoteFetcher";
import CounterThree from "./CounterThree";
import QuoteFetcherLoader from "./QuoteFetcherLoader";
import ProfileViewerWithSearch from "./ProfileViewerWithSearch";

function Effects() {
  return (
    <>
      <h3>Counter</h3>
      <CounterThree /> 
      <h3>Quote Fetcher</h3>
      <QuoteFetcher />
      <h3>Quote Fetcher Loader</h3>
      <QuoteFetcherLoader />
      <h3>Profile Viewer With Search</h3>
      <ProfileViewerWithSearch />
      <h3>Render Demo</h3>
     <RenderDemo />
      
    </>
  );
}

export default Effects;

//