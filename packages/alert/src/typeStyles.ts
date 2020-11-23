export const typeStyles = {
  default: {
    bgGray20: true,
    gray70: true,
    border: (_: any, { variant }: any) => {
      return variant ? '1px solid gray30' : false
    },
  },

  info: {
    bgBlue20: true,
    blue70: true,
    border: (_: any, { variant }: any) => {
      return variant ? '1px solid blue30' : false
    },
  },

  warning: {
    bgOrange20: true,
    orange70: true,
    border: (_: any, { variant }: any) => {
      return variant ? '1px solid orange30' : false
    },
  },

  success: {
    bgGreen20: true,
    green70: true,
    border: (_: any, { variant }: any) => {
      return variant ? '1px solid green30' : false
    },
  },

  error: {
    bgRed20: true,
    red70: true,
    border: (_: any, { variant }: any) => {
      return variant ? '1px solid red30' : false
    },
  },
}

export type AlertType = keyof typeof typeStyles
