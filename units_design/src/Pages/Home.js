import Banner from "../Components/Home/Banner";
import UnitsInHome from "../Components/Home/UnitsInHome";
import AppBanner from "../Components/Home/AppBanner";

export default function Home(props) {
  return (
    <div className="pageWidth">
      <Banner />
      <UnitsInHome update_favorites={props.update_favorites} favorites={props.favorites}/>

      <AppBanner />
    </div>
  );
}
