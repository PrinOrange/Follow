import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface PaletteCuteFiIconProps {
  width?: number
  height?: number
  color?: string
}

export const PaletteCuteFiIcon = ({
  width = 24,
  height = 24,
  color = "#10161F",
}: PaletteCuteFiIconProps) => {
  return (
    <Svg width={width} height={height} fill="none" viewBox="0 0 24 24">
      <Path fill="#fff" fillOpacity={0.01} d="M24 0v24H0V0z" />
      <Path
        fill={color}
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c.137 0 .273-.003.409-.008a2.53 2.53 0 0 0 2.222-1.473c.374-.79.368-1.757-.055-2.603-.215-.429-.13-.947.209-1.287l.089-.089a1.29 1.29 0 0 1 1.124-.36l1.74.29c1.685.28 3.696-.566 4.082-2.57.118-.616.18-1.251.18-1.9 0-5.523-4.477-10-10-10M8 8.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m5 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M7.5 11a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
        clipRule="evenodd"
      />
    </Svg>
  )
}