import type { HeadTag } from '@unhead/vue'
import type { IntrinsicElementAttributes, PropType, VNode } from 'vue'
import { cloneVNode, defineComponent, h } from 'vue'
import { renderToString, renderToWebStream } from 'vue/server-renderer'
import { serializeState } from '~/lib/state'
import clientEntryAssets from './entry-client?assets=client'
import { createApp } from './main'

function normalizeProps(props: Record<string, any>) {
  const ret = {} as Record<string, string>
  for (const key in props) {
    if (!Object.hasOwn(props, key))
      continue
    const value = props[key]
    if ((key === 'class' || key === 'style') && typeof value !== 'string') {
      if (key === 'class') {
        ret.class = Array.from((value as unknown as Set<string>)).join(' ')
      }
      else if (key === 'style') {
        ret.style = Array.from((value as unknown as Set<string>)).map(([k, v]) => `${k}:${v}`).join(';')
      }
      continue
    }
    if (value !== false && value !== null) {
      ret[key] = value === true ? '' : value
      continue
    }
  }
  return ret
}

const Template = defineComponent({
  props: {
    tags: {
      type: Array as PropType<HeadTag[]>,
      required: true,
    },
    initialState: {
      type: Object as PropType<Record<string, any>>,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  setup: ({ tags, initialState, content }) => {
    const schema = {
      htmlAttrs: {} as IntrinsicElementAttributes['html'],
      bodyAttrs: {} as IntrinsicElementAttributes['body'],
      tags: {
        head: [] as VNode[],
        bodyClose: [] as VNode[],
        bodyOpen: [] as VNode[],
      },
    }
    for (const tag of tags) {
      if (tag.tag === 'htmlAttrs' || tag.tag === 'bodyAttrs') {
        Object.assign(schema[tag.tag], normalizeProps(tag.props))
        continue
      }
      const tagPosition = tag.tagPosition || 'head'
      schema.tags[tagPosition].push(
        h(tag.tag, {
          ...tag.props,
          innerHTML: tag.textContent ?? '',
        }),
      )
    }
    return () => (
      <html {...schema.htmlAttrs}>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="apple-touch-icon" href="/pwa-192x192.png" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00aba9" />
          <meta name="msapplication-TileColor" content="#00aba9" />
          <script innerHTML={`;(function () {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        const setting = localStorage.getItem('vueuse-color-scheme') || 'auto'
        if (setting === 'dark' || (prefersDark && setting !== 'light'))
          document.documentElement.classList.toggle('dark', true)
      })()`}
          >

          </script>
          {clientEntryAssets.css.map(attrs => (
            <link rel="stylesheet" crossorigin="" {...attrs} />
          ))}
          {clientEntryAssets.js.map(attrs => (
            <link rel="modulepreload" crossorigin="" {...attrs} />
          ))}
          <script type="module" src={clientEntryAssets.entry} />
          {schema.tags.head.map(tag => cloneVNode(tag))}
        </head>

        <body {...schema.bodyAttrs} data-allow-mismatch="children">
          {schema.tags.bodyOpen.map(tag => cloneVNode(tag))}
          <div id="app" innerHTML={content}>
          </div>
          <script type="application/json" id="__INITIAL_STATE__" innerHTML={serializeState(initialState) ?? ''}></script>
          <noscript> This website requires JavaScript to function properly. Please enable JavaScript to continue. </noscript>
          {schema.tags.bodyClose.map(tag => cloneVNode(tag))}
        </body>
      </html>
    )
  },
})

export async function render(req: Request, env: Env, ctx: ExecutionContext) {
  const url = new URL(req.url)
  const path = url.pathname

  const { app, head, initialState, hooks } = await createApp(path)

  const renderContent = {
    teleports: {} as Record<string, string>,
    modules: new Set<string>(),
    cloudflare: {
      env,
      ctx,
    },
  }

  await hooks.callHook('app:before-render', path)
  const content = await renderToString(app, renderContent)
  await hooks.callHook('app:after-render', path, content)

  const tags = await head.resolveTags()

  const stream = renderToWebStream(
    <Template
      tags={tags}
      content={content}
      initialState={initialState}
    />,
  )
  return new Response(stream, {
    headers: {
      'content-type': 'text/html',
    },
  })
}
