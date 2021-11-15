export default {
  name: "index",
  title: "Index",
  type: "document",
  fields: [
    {
      name: "heroBanner",
      title: "Hero Banner",
      description: "background pic, header,text and button for Top banner",
      type: "banner",
    },
    {
      name: "carousel",
      title: "Carousel",
      type: "array",
      of: [{ type: "carousel" }],
    },
    {
      name: "serviceCardsTitle",
      title: "Service Card Title",
      type: "string",
    },
    {
      name: "services",
      title: "Service cards",
      description: "Try to do sets of 3 :)",
      type: "array",
      of: [{ type: "serviceCard" }],
    },
    {
      name: "reviewsTitle",
      title: "Reviews Title",
      type: "string",
    },
    {
      name: "reviews",
      title: "Reviews",
      type: "array",
      of: [{ type: "review" }],
    },
    {
      title: "SEO",
      name: "seo",
      type: "seo",
      description: "keywords, & description for page",
    },
  ],
};
