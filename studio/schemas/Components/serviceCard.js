export default {
  name: "serviceCard",
  title: "Service card",
  type: "object",
  fields: [
    {
      name: "icon",
      title: "Icon",
      type: "pic",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "tag",
      title: "Tagline",
      type: "string",
    },
    {
      name: "siteUrl",
      title: "Site Url",
      type: "reference",
      to: [{ type: "service" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
