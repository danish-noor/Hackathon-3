// import { defineType } from "sanity";

// export const productSchema = defineType({
//   name: "products",
//   title: "Products",
//   type: "document",
//   fields: [
//     {
//       name: "title",
//       title: "Product Title",
//       type: "string",
//     },
//     {
//       name: "price",
//       title: "Price",
//       type: "number",
//     },
//     {
//       title: "Price without Discount",
//       name: "priceWithoutDiscount",
//       type: "number",
//     },
//     {
//       name: "badge",
//       title: "Badge",
//       type: "string",
//     },
//     {
//       name: "image",
//       title: "Product Image",
//       type: "image",
//     },
//     {
//       name: "category",
//       title: "Category",
//       type: "reference",
//       to: [{ type: "categories" }],
//     },
//     {
//       name: "description",
//       title: "Product Description",
//       type: "text",
//     },
//     {
//       name: "inventory",
//       title: "Inventory Management",
//       type: "number",
//     },
//     {
//       name: "tags",
//       title: "Tags",
//       type: "array",
//       of: [{ type: "string" }],
//       options: {
//         list: [
//           { title: "Featured", value: "featured" },
//           {
//             title: "Follow products and discounts on Instagram",
//             value: "instagram",
//           },
//           { title: "Gallery", value: "gallery" },
//         ],
//       },
//     },
//   ],
// });

// export const productSchema = {
//   name: "product",
//   type: "document",
//   title: "Product",
//   fields: [
//     {
//       name: "badge",
//       title: "Badge",
//       type: "string",
//     },
//     { name: "title", type: "string", title: "Title" },
//     { name: "price", type: "number", title: "Price" },
//     { name: "image", type: "image", title: "Image" },
//     { name: "stock", type: "number", title: "Stock" },
//     {
//       name: "slug",
//       type: "slug",
//       title: "Slug",
//       options: {
//         source: "title",
//         maxLength: 200,
//       },
//     },
//   ],
// };

import { defineType } from "sanity";

export const productSchema = defineType({
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Product Title",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      title: "Price without Discount",
      name: "priceWithoutDiscount",
      type: "number",
    },
    {
      name: "badge",
      title: "Badge",
      type: "string",
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "categories" }],
    },
    {
      name: "description",
      title: "Product Description",
      type: "text",
    },
    {
      name: "inventory",
      title: "Inventory Management",
      type: "number",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Featured", value: "featured" },
          {
            title: "Follow products and discounts on Instagram",
            value: "instagram",
          },
          { title: "Gallery", value: "gallery" },
        ],
      },
    },
  ],
});