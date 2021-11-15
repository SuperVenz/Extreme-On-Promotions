export default {
  name: "widgets",
  title: "Widgets",
  type: "document",
  fieldsets: [
    {
      name: "seo",
      title: "SEO",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "companyInfo",
      title: "Website Meta Info",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "pic",
      fieldset: "companyInfo",
    },
    {
      name: "companyName",
      title: "Company Name",
      type: "string",
      fieldset: "companyInfo",
    },
    {
      name: "cannonicalLink",
      title: "Cannonical Link",
      type: "url",
      fieldset: "companyInfo",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "formBackground",
      title: "Form Background Pic",
      type: "pic",
    },
  ],
};
