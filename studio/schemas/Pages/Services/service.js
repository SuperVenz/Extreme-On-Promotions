export default {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Page Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "picture",
      title: "Picture",
      type: "pic",
      description: "use landscape pictures",
    },
    {
      name: "textContent",
      title: "Text Content",
      type: "article",
    },
    {
      name: "seo",
      title: "Seo",
      type: "seo",
    },
  ],
};
