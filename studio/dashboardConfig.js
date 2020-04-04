export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5e88bce1ca94ba8c0d684a42',
                  title: 'Sanity Studio',
                  name: 'honors-studio-k9ibcmsm',
                  apiId: '55e1bbfb-2087-4a43-b1cd-c9ef5eb3a65d'
                },
                {
                  buildHookId: '5e88bce1bb65cdef95eb476a',
                  title: 'Blog Website',
                  name: 'honors-web',
                  apiId: '4186a929-6a4c-4c38-a98d-33e7626b2690'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joshpoll/honors',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://honors-web.netlify.com', category: 'apps'}
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
