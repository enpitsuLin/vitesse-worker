import { render } from '~/entry-server'

export default {
  async fetch(req, env, ctx) {
    const app = await render(req, env, ctx)
    if (app)
      return app
    return new Response('404', {
      status: 404,
    })
  },
} satisfies ExportedHandler<Env>
