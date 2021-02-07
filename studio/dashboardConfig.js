export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60202434016eb7140500a7d5',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-w3pjy8y5',
                  apiId: 'e1c576df-01d6-43e1-bff8-662dfc489188'
                },
                {
                  buildHookId: '602024345f91d47b8d7bc9fc',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-1nnsfdq2',
                  apiId: 'b043c35b-f34a-4702-8d74-4e531fbaadbd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/reactnativo/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-1nnsfdq2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
