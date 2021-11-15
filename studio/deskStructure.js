import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Editor")
    .items([
      S.listItem()
        .title("Site Configuration")
        .child(
          S.list()
            // Sets a title for our new list
            .title("Widgets and Themes")
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title("Settings")
                .child(
                  S.document()
                    .schemaType("widgets")
                    .documentId("widgets")
                    .title("Edit")
                ),
              S.listItem()
                .title("Contact Info")
                .child(
                  S.document()
                    .schemaType("contact")
                    .documentId("contact")
                    .title("Edit")
                ),
              S.listItem()
                .title("Style Theme")
                .child(
                  S.document()
                    .schemaType("theme")
                    .documentId("theme")
                    .title("Edit")
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Site Pages")
        .child(
          S.list()
            // Sets a title for our new list
            .title("Pages")
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title("Landing Page")
                .child(
                  S.document()
                    .schemaType("index")
                    .documentId("index")
                    .title("Edit")
                ),
              S.listItem()
                .title("Thank You Page")
                .child(
                  S.document()
                    .schemaType("thankYou")
                    .documentId("thankYou")
                    .title("Edit")
                ),
              S.listItem()
                .title("Contact Page")
                .child(
                  S.document()
                    .schemaType("contactPage")
                    .documentId("contactPage")
                    .title("Edit")
                ),
              // Inner list of Pages.  This is /services
            ])
        ),
      S.listItem()
        .title("Service Pages")
        .child(
          S.documentList()
            .schemaType("service")
            .title("Pages")
            .filter('_type == "service"')
        ),
      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "index",
            "service",
            "theme",
            "widgets",
            "thankYou",
            "contactPage",
            "contact",
          ].includes(listItem.getId())
      ),
    ]);
