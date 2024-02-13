import {defineField, Rule} from 'sanity'

export default {
  name: 'cars',
  type: 'document',
  title: 'Cars',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Name of car',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug of project',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Project Description',
      validation: (Rule) => Rule.min(1).max(200),
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
      ],
    }),
  ],
}
