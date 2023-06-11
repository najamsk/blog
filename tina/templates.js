export function postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "boolean",
      name: "comments",
      label: "comments",
    },
    {
      type: "string",
      name: "categories",
      label: "categories",
      list: true,
    },
  ];
}
