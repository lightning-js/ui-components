import { Tone } from '../../types/types';
import { ComponentStyle } from '../../utils';

type Style = {
  Container: {
    base: {
      height: number;
      color: string;
      borderRadius: number;
    };
    tones: {
      [tone in Tone]?: {
        color: string;
      };
    };
  };
  ProgressBar: {
    base: {
      borderRadius: number;
      color: string;
    };
    tones: {
      [tone in Tone]?: {
        color: string;
      };
    };
  };
};

const styles: Style = {
  Container: {
    base: {
      height: 10,
      color: '0xf8f7fa1a',
      borderRadius: 2
    },
    tones: {
      inverse: {
        color: '0x1818191a'
      }
    }
  },
  ProgressBar: {
    base: {
      borderRadius: 2,
      color: '0xf8f7faff'
    },
    tones: {
      brand: {
        color: '0x93a9fdff'
      },
      inverse: {
        color: '0x181819ff'
      }
    }
  }
};

export default styles satisfies ComponentStyle;
