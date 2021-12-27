import { createClient } from "contentful";

export const createContentfulClient = () =>
  createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE as string,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN as string,
  });
