const styles = {
    tone: 'neutral',
    Container: {
      base: {
        height: 92,
        display: 'flex',
        padding: [50, 30],
        color: '0xffffff1a',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        contentColor: '0xf8f7faff',
        focus: {
          color: '0xffffffff',
          contentColor: '0x181819ff',
        },
        disabled: {
          color: '0xf8f7fa80',
        },
      },
      tones: {
        brand: {
          color: '0xbecffe1a',
          focus: {
            color: '0xf8f7faff',
            contentColor: '0x181819ff',
          },
          disabled: {
            color: '0xf8f7fa80',
          },
        },
        inverse: {
          color: '0x48474b1a',
          focus: {
            color: '0xffffffff',
            contentColor: '0x181819ff',
          },
          disabled: {
            color: '0xf8f7fa80',
          },
        },
        neutral: {
          focus: {
            color: '0xffffffff',
            contentColor: '0x181819ff',
          },
          disabled: {
            color: '0xf8f7fa80',
          },
        },
      },
    },
    Content: {
      base: {
        color: '0xf8f7faff',
        focus: {
          color: '0x181819ff',
        },
        disabled: {
          color: '0xf8f7fa80',
        },
      },
      tones: {
        brand: {
          color: '0x93a9fdff',
          focus: {
            color: '0x93a9fdff',
          },
          disabled: {
            color: '0xf8f7fa80',
          },
        },
        inverse: {
          color: '0xf8f7faff',
          focus: {
            color: '0x181819ff',
          },
          disabled: {
            color: '0xf8f7fa80',
          },
        },
        neutral: {
          focus: {
            color: '0x181819ff',
          },
          disabled: {
            color: '0xf8f7fa80',
          },
        },
      },
    },
    Text: {
      base: {
        textAlign: 'left',
        color: '0xf8f7faff',
        fontFamily: 'Arial',
        fontSize: 25,
        fontWeight: 500,
        lineHeight: 32,
        verticalAlign: 'middle',
        textBaseline: 'bottom',
        focus: {
          color: '0x181819ff',
        },
        disabled: {
          color: '0xf8f7fa80',
        },
      },
      tones: {
        brand: {
          color: '0x93a9fdff',
          focus: {
            color: '0x93a9fdff',
          },
          disabled: {
            color: '0xf8f7fa80',
          },
        },
        inverse: {
          color: '0xf8f7faff',
          focus: {
            color: '0x181819ff',
          },
          disabled: {
            color: '0xf8f7fa80',
          },
        },
        neutral: {
          focus: {
            color: '0x181819ff',
          },
          disabled: {
            color: '0xf8f7fa80',
          },
        },
      },
    },
  }
  
  export default styles
  