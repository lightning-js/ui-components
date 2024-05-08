import { Tone } from "../../types/types";

type Style = {
    Container: {
        base: {
            height: number,
            color: string,
            borderRadius: number
        },
        tones: ToneStyle
    },
    ProgressBar: {
        base: {
            borderRadius: number,
            color: string,
        },
        tones: ToneStyle
    }
}

type ToneStyle = {
    [tone in Tone]: {
        color: string
    }
}

const styles: Style = {
    Container: {
        base: {
            height: 10,
            color: "0xf8f7fa1a",
            borderRadius: 2,
        },
        tones: {
            brand: {
                color:  "0xf8f7fa1a"
            },
            inverse: {
                color: "0x1818191a"
            },
            neutral: {
                color:  "0xf8f7fa1a"
            }
        }
    },
    ProgressBar: {
        base: {
            borderRadius: 2,
            color: "0xf8f7faff",
        },
        tones: {
            brand: {
                color: "0x93a9fdff"
            },
            inverse: {
                color: "0x181819ff"
            },
            neutral: {
                color: "0xf8f7faff"
            }
        }
    }
}

export default styles;