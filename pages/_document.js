import Document, { Head, NextScript, Main } from 'next/document'
import { DOMProperty } from 'react-dom/lib/ReactInjection'
import { properties as DOMProperties } from 'react-dom/lib/DOMProperty'
import flush from 'styled-jsx/server'

// By default React limit the set of valid DOM elements and attributes
// (https://github.com/facebook/react/issues/140) this config whitelist
// Amp elements/attributes
if (typeof DOMProperties.amp === 'undefined') {
  DOMProperty.injectDOMPropertyConfig({
    Properties: { amp: DOMProperty.MUST_USE_ATTRIBUTE },
    isCustomAttribute: attributeName => attributeName.startsWith('amp-')
  })
}

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head } = renderPage()
    const styles = flush()
    return { html, head, styles }
  }

  render () {
    const { html } = this.props
    return (
      <html amp=''>
        <Head>
          <meta charset='utf-8' />

          <link rel='stylesheet' href='/static/react-md.blue-red.min.css' />
          
          <link rel='canonical' href='/' />
          <meta name='viewport' content='width=device-width,minimum-scale=1' />
          <style amp-boilerplate=''>{`body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`}</style><noscript><style amp-boilerplate=''>{`body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`}</style></noscript>
          <style amp-custom=''>{`body {font-family: Roboto, sans-serif; padding: 30px; color: #444;} h1 {margin-bottom: 5px;} .byline { color: #aaa; margin-bottom: 25px; } p {font-size: 18px; line-height: 30px; margin-top: 30px;} .caption {color: #ccc; margin-top: 0; font-size: 14px; text-align: center;}`}</style>
          <script async src='https://cdn.ampproject.org/v0.js' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}