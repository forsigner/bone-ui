export const getTypeStyles = (type: string) => {
  const maps: any = {
    default: {
      bgGray200: true,
      gray700: true,
      borderGray300: true,
    },

    info: {
      bgBlue200: true,
      blue700: true,
      borderBlue300: true,
    },

    warning: {
      bgOrange200: true,
      orange700: true,
      borderOrange300: true,
    },

    success: {
      bgGreen200: true,
      green700: true,
      borderGreen300: true,
    },

    error: {
      bgRed200: true,
      red700: true,
      borderRed300: true,
    },
  }
  return maps[type]
}

export type AlertType = 'defaut' | 'info' | 'warning' | 'success' | 'error'
