import React from "react"
 /* This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

function Logo(props) {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.6974 66.955C5.33062 60.2315 0.74154 50.954 0.0609378 39.379C-0.519902 29.5512 3.06712 20.0501 10.1547 12.6185C17.8076 4.59929 28.5953 0 39.7509 0C61.6388 0 79.4454 17.608 79.4454 39.2518C79.4454 49.4501 75.4837 59.1244 68.2919 66.4925L76.6542 74.7616C77.2461 75.3469 77.4545 76.2106 77.1907 76.9976C76.9291 77.7824 76.2419 78.3568 75.4127 78.4796C74.7654 78.5738 68.3163 79.488 59.4285 79.488C45.8764 79.488 26.6532 77.3615 13.6974 66.955Z"
        fill="#1C57F3"
      />
    </svg>
  )
}
export default Logo