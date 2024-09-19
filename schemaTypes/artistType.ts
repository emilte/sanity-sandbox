import { defineField, defineType } from 'sanity';

const fields = [
  defineField({
    name: 'name',
    type: 'string',
  }),
];

export const artistType = defineType({
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: fields,
});
