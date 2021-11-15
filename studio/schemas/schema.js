// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import article from "./Components/article";
import banner from "./Components/banner";
import button from "./Components/button";
import carousel from "./Components/carousel";
import contact from "./Components/contact";
import pic from "./Components/pic";
import review from "./Components/review";
import seo from "./Components/seo";
import serviceCard from "./Components/serviceCard";
import subHeader from "./Components/subHeader";
import service from "./Pages/Services/service";
import index from "./Pages/index";
import theme from "./SiteConfig/theme";
import widgets from "./SiteConfig/widgets";
import thankyou from "./Pages/thankYou";
import backBar from "./Components/backBar";
import "all:part:@sanity/base/schema-type";
import contactPage from "./Pages/contactPage";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    article,
    banner,
    button,
    carousel,
    contactPage,
    contact,
    pic,
    review,
    seo,
    serviceCard,
    subHeader,
    service,
    index,
    theme,
    widgets,
    thankyou,
    backBar,
  ]),
});
