import { useEffect, useState } from "react";
import { EntryCollection } from "contentful";
import { createContentfulClient } from "utils/createContentfulClient";
import { CONTENT_TYPE, CONTENTFUL_MODELS } from "types/contentful";

export const useContentfulData = <T extends CONTENTFUL_MODELS>(
  dataType: CONTENT_TYPE
) => {
  const [contentulData, setContentulData] = useState<EntryCollection<T>>();
  const [contentfulErrors, setContentfulErrors] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setContentfulErrors(null);
    setIsLoading(true);

    (async () => {
      const client = createContentfulClient();

      try {
        const response = await client.getEntries<T>({
          content_type: dataType,
        });

        setContentulData(response);
      } catch (error) {
        setContentfulErrors(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [dataType]);

  return { contentulData, contentfulErrors, isLoading };
};
