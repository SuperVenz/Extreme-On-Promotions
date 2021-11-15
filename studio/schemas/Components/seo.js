export default {
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      description: "Add keywords that describes your event.",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
        validation: (Rule) => Rule.required(),
      },
    },
    {
      name: "pageTitle",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "description",
      name: "description",
      type: "text",
      description: "keywords for the page",
      validation: (Rule) => Rule.required(),
    },
  ],
};
