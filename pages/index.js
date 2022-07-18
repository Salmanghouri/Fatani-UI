import Head from "next/head";
import Image from "next/image";
import Browsepropertiesmv from "./Browsepropertiesmv";
import Brands from "./components/Brandsportion/Brands";
import Featureview from "./components/Featureevent/Featureview";
import Mvdownmenu from "./components/MvDown/Mvdownmenu";
import Propertycardview from "./components/Card/Propertycardview";
import Topinvestview from "./components/Topinvest/Topinvestview";
import Videogrid from "./components/Video/Videogrid";

import Navbar from "./Navbar";
import Searchbarmv from "./Searchbarmv";

export default function Home() {
  return (
    <>
     

      <div className="grid grid-row-3 gap-0 ">
        <Navbar />
        <div>
          {" "}
          <Searchbarmv />
        </div>

        <div>
          <Browsepropertiesmv />
        </div>
        <div>
          {" "}
          <Topinvestview />{" "}
        </div>
        <div>
          {" "}
          <Featureview />{" "}
        </div>
        <div>
          {" "}
          <Propertycardview />{" "}
        </div>
        <div>
          <Videogrid />{" "}
        </div>
        <div>
          {" "}
          <Brands />{" "}
        </div>
        <div className="mt-3">
          <Mvdownmenu />
        </div>
      </div>
    </>
  );
}
