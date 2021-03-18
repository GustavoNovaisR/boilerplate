import { createGlobalStyle } from 'styled-components'
import 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html{
  font-size:62.5%
}

body{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
`
// export interface whiteColorProps {
//   whiteColor: boolean
// }

// const GlobalStyle = createGlobalStyle<whiteColorProps>`
//   body {
//     color: ${(props) => (props.whiteColor ? 'white' : 'black')};
//   }
// `

export default GlobalStyle
