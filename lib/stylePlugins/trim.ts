import { Root } from 'postcss'

export default () => {
  return {
    postcssPlugin: 'trim',
    Once(css: Root) {
      css.walk(({ type, raws }) => {
        if (type === 'rule' || type === 'atrule') {
          if (raws.before) {
            raws.before = '\n'
          }
          if (raws.after) {
            raws.after = '\n'
          }
        }
      })
    }
  }
}

export const postcss = true
