export default {
  name: "theme",
  title: "Theme",
  type: "document",
  fieldsets: [
    {
      name: "hero",
      title: "Hero Font & Button Color",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        columns: 2, // Defines a grid for the fields and how many columns it should have
      },
    },
    {
      name: "mainTheme",
      title: "Main Font Color and Background Color",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        columns: 2, // Defines a grid for the fields and how many columns it should have
      },
    },
    {
      name: "serviceCard",
      title: "Service Card Color",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        columns: 2, // Defines a grid for the fields and how many columns it should have
      },
    },
    {
      name: "uiColors",
      title: "UI Icons",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        columns: 2, // Defines a grid for the fields and how many columns it should have
      },
    },
    {
      name: "form",
      title: "Form Colors",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        columns: 2, // Defines a grid for the fields and how many columns it should have
      },
    },
    {
      name: "contact",
      title: "Contact Colors",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        columns: 2, // Defines a grid for the fields and how many columns it should have
      },
    },
  ],
  fields: [
    {
      title: "Header Font Color",
      name: "headerColor",
      type: "color",
      fieldset: "hero",
    },
    {
      title: "Subtext Font Color",
      name: "subtextColor",
      type: "color",
      fieldset: "hero",
    },
    {
      title: "Button Font Color",
      name: "bttnFontColor",
      type: "color",
      fieldset: "hero",
    },
    {
      title: "Button Background Color",
      name: "bttnBackground",
      type: "color",
      fieldset: "hero",
    },
    {
      name: "headerFontColor",
      title: "Header Font Color",
      type: "color",
      fieldset: "mainTheme",
    },
    {
      name: "mainFontColor",
      title: "Main Page Font Color",
      type: "color",
      fieldset: "mainTheme",
    },
    {
      name: "backgroundColor",
      title: "Page Background Color",
      type: "color",
      fieldset: "mainTheme",
    },
    {
      name: "serviceCardFontColor",
      title: "Service Card Font Color",
      type: "color",
      fieldset: "serviceCard",
    },
    {
      name: "serviceCardColor",
      title: "Service Card Color",
      type: "color",
      fieldset: "serviceCard",
    },
    {
      name: "backArrow",
      title: "Back Arrow Color",
      type: "color",
      fieldset: "uiColors",
    },
    {
      name: "backArrowBackground",
      title: "Back Arrow Background Color",
      type: "color",
      fieldset: "uiColors",
    },
    {
      name: "carouselDots",
      title: "Carousel Bottom Dots",
      type: "color",
      fieldset: "uiColors",
    },
    {
      name: "carouselArrows",
      title: "Carousel Side Arrows",
      type: "color",
      fieldset: "uiColors",
    },
    {
      name: "formFontColor",
      title: "Form Font Colour",
      type: "color",
      fieldset: "form",
    },
    {
      name: "formBoxColor",
      title: "Form Box Color",
      type: "color",
      fieldset: "form",
    },
    {
      name: "formBttnColor",
      title: "Form Button Color",
      type: "color",
      fieldset: "form",
    },
    {
      name: "formBttnTextColor",
      title: "formBttnTextColor",
      type: "color",
      fieldset: "form",
    },
    {
      name: "contactHeader",
      title: "Contact Header Color",
      type: "color",
      fieldset: "contact",
    },
    {
      name: "contactLinks",
      title: "Contact URL colors",
      type: "color",
      fieldset: "contact",
    },
    {
      name: "contactBackground",
      title: "Contact Background colors",
      type: "color",
      fieldset: "contact",
    },
  ],
};
