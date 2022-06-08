import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={45}
    height={1151}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      className="svg-path"
      d="M21.5 1c.8 97.47.333 130.955 0 135.514l-20 21.135 20 22.378 20-22.378h-20v162.865a5225.394 5225.394 0 0 0-20 21.135l20 21.135 20-21.135h-20v149.189l-20 22.378c6.667 7.874 20 23.373 20 22.379 0-.995 13.333-15.334 20-22.379h-20v150.433l-11 16.162L1.5 691l20 18.649L41.5 691h-20v147.946l-20 29.838 20 18.648 20-18.648h-20v149.186l-20 26.11 20 22.38 20-22.38h-20V1151"
      stroke="#000"
      
      strokeWidth={3}
    />
  </svg>
)

export default SvgComponent