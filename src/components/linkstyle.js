import { Link } from "gatsby"
import React from "react"
import {link} from 'gatsby'

 /* This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

function LinkStyle(props) {
  return (
   
    <Link to="{this.props.url]">
        {this.props.linkText}
    </Link>
  )
}
export default LinkStyle