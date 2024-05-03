import { Align, JustifyContent, States, Tone } from "../../types/types"

type Style = {
  tone: Tone,
  Container: {
      base: {
        height: number,
        padding: [number, number],
        color: string,
        justifyContent: JustifyContent,
        alignItems: Align,
        borderRadius: number,
        contentColor: string,
      },
      tones: ToneStyle
  },
  Text: {
      base: {
        textAlign: Align,
        color: string,
        fontFamily: string,
        fontSize: number,
        fontWeight: number,
        lineHeight: number,
      },
      tones: ToneStyle
  }
}

type ToneStyle = {
  [_tone: keyof Tone]: {
      [_state: keyof States]: StateStyle
  }
}

type StateStyle = {
  color: string,
  contentColor?: string
}

const styles: Style = {
    tone: 'neutral',
    Container: {
      base: {
        height: 92,
        padding: [50, 30],
        color: '0xffffff1a',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        contentColor: '0xf8f7faff',
      },
      tones: {
        brand: {
          unfocused: {
            color: '0xbecffe1a',
          },
          focus: {
            color: '0xf8f7faff',
            contentColor: '0x181819ff',
          },
          disabled: {
            color: '0xf8f7fa80',
          },
        },
        inverse: {
          unfocused: {
            color: '0x48474b1a',
          },
          focus: {
            color: '0xffffffff',
            contentColor: '0x181819ff',
          },
          disabled: {
            color: '0xf8f7fa80',
          },
        },
        neutral: {
          unfocused: {
            color: '0xffffff1a',
          },
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
    Text: {
      base: {
        textAlign: 'left',
        color: '0xf8f7faff',
        fontFamily: 'Arial',
        fontSize: 25,
        fontWeight: 500,
        lineHeight: 32,
      },
      tones: {
        brand: {
          unfocused: {
            color: '0x93a9fdff',
          },
          focus: {
            color: '0x93a9fdff',
          },
          disabled: {
            color: '0xf8f7fa80',
          },
        },
        inverse: {
          unfocused: {
            color: '0xf8f7faff',
          },
          focus: {
            color: '0x181819ff',
          },
          disabled: {
            color: '0xf8f7fa80',
          },
        },
        neutral: {
          unfocused: {
            color: '0xf8f7faff',
          },
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
  