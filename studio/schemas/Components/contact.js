export default {
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Contact Header",
      type: "string",
    },
    {
      name: "number",
      title: "Number",
      description: "Format: 760760760",
      type: "string",
    },
    {
      name: "phoneIcon",
      title: "phone Icon",
      type: "pic",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "emailIcon",
      title: "Email Icon",
      type: "pic",
    },

    {
      name: "header",
      title: "Header",
      description: "This is the left Header text on the footer",
      type: "string",
    },
    {
      name: "text",
      title: "Text",
      description: "This is the Left text on the footer",
      type: "text",
    },
  ],
};
