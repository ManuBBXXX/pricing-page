import { defineCollection, z } from "astro:content";

const offersCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    price: z.string(),
    description: z.string(),
    features: z.array(z.string()),
    delay: z.string(),
  }),
});

export const collections = {
  offers: offersCollection,
};
