import { defineField, defineType } from 'sanity';

const fields = [
  defineField({
    name: 'name',
    type: 'string',
  }),
  defineField({
    name: 'city',
    type: 'string',
  }),
  defineField({
    name: 'country',
    type: 'string',
  }),
];

export const venueType = defineType({
  name: 'venue',
  title: 'Venue',
  type: 'document',
  fields: fields,
});
