import * as React from "react"

function ArrowLeft(props:  React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 12 12"
      {...props}
    >
      <path
        fill="currentColor"
        d="M10.5 6a.5.5 0 00-.5-.5H3.207l2.647-2.646a.5.5 0 10-.708-.708l-3.5 3.5a.5.5 0 000 .708l3.5 3.5a.5.5 0 00.708-.708L3.207 6.5H10a.5.5 0 00.5-.5z"
      />
    </svg>
  )
}

export default ArrowLeft
