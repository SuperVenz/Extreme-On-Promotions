export default {
  name: "pic",
  title: "image",
  type: "object",
  fields: [
    {
      title: "image",
      name: "image",
      type: "image",
    },
    {
      title: "alt text",
      name: "altText",
      type: "string",
      description: "alt text for image",
      validation: (Rule) => Rule.required(),
    },
  ],
};
