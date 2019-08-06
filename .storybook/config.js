import { configure, addDecorator } from '@storybook/react'
import Typography from '../src/style/typography'

import { withInfo } from '@storybook/addon-info'

addDecorator(
  withInfo({
    header: false,
    inline: true,
  })
)

Typography.injectStyles()

const req = require.context('../src', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}

global.__PATH_PREFIX__ = ''

window.___navigate = pathname => {
  action('NavigateTo:')(pathname)
}
configure(loadStories, module)
