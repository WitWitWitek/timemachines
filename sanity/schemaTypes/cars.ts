import {defineField, Rule} from 'sanity'

export default {
  name: 'cars',
  type: 'document',
  title: 'Samochody',
  fields: [
    defineField({
      name: 'model',
      type: 'string',
      title: 'Model i marka samochodu',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Link do modelu',
      options: {
        source: 'model',
      },
    }),
    defineField({
      name: 'coverImage',
      type: 'image',
      title: 'Zdjęcie poglądowe',
    }),
    defineField({
      name: 'parameters',
      type: 'array',
      title: 'Parametry techniczne',
      of: [
        defineField({
          name: 'parameter',
          type: 'object',
          title: 'Parametr',
          fields: [
            {name: 'parameterName', type: 'string', title: 'Nazwa parametru'},
            {name: 'parameterValue', type: 'string', title: 'Wartość parametru'},
          ],
        }),
      ],

      // validation: (Rule) => Rule.min(1).max(200),
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Opis samochodu',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      title: 'Galeria',
      of: [{type: 'image'}],
    }),
  ],
}
