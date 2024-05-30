import { Align, JustifyContent, States, Tone } from '../../types/types';
import { ComponentStyle } from '../../utils';

type Style = {
  Container: {
    base: {
      height: number;
      padding: [number, number];
      color: string;
      justifyContent: JustifyContent;
      alignItems: Align;
      borderRadius: number;
      contentColor: string;
      disabled: {
        color: string;
      };
      focus: {
        color: string;
        contentColor: string;
      };
    };
    tones: {
      [tone in Tone]?: {
        [state in States]?: {
          color: string;
          contentColor?: string;
        };
      };
    };
  };
  Text: {
    base: {
      textAlign: Align;
      fontFamily: string;
      fontSize: number;
      fontWeight: number;
      lineHeight: number;
      color: string;
      focus: {
        color: string;
      };
      disabled: {
        color: string;
      };
    };
    tones: {
      [tone in Tone]?: {
        [state in States]?: {
          color: string;
        };
      };
    };
  };
};

const styles: Style = {
  Container: {
    base: {
      height: 92,
      padding: [50, 30],
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      color: '0xffffff1a',
      contentColor: '0xf8f7faff',
      disabled: {
        color: '0xf8f7fa80'
      },
      focus: {
        color: '0xffffffff',
        contentColor: '0x181819ff'
      }
    },
    tones: {
      brand: {
        unfocused: {
          color: '0xbecffe1a'
        },
        focus: {
          color: '0xf8f7faff'
        }
      },
      inverse: {
        unfocused: {
          color: '0x48474b1a'
        }
      },
      neutral: {
        unfocused: {
          color: '0xffffff1a'
        }
      }
    }
  },
  Text: {
    base: {
      textAlign: 'left',
      fontFamily: 'Arial',
      fontSize: 25,
      fontWeight: 500,
      lineHeight: 32,
      color: '0xf8f7faff',
      focus: {
        color: '0x181819ff'
      },
      disabled: {
        color: '0xf8f7fa80'
      }
    },
    tones: {
      brand: {
        unfocused: {
          color: '0x93a9fdff'
        },
        focus: {
          color: '0x93a9fdff'
        }
      }
    }
  }
};

export default styles satisfies ComponentStyle;
