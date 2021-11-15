export default {
  name: "contactPage",
  title: "Contact",
  type: "document",
  fields: [
    {
      title: "SEO",
      name: "seo",
      type: "seo",
      description: "keywords, & description for page",
      validation: (Rule) => Rule.required(),
    },
  ],
};
