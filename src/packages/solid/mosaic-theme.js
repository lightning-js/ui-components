export default {
  name: 'Mosaic Lightning TV',
  alpha: {
    primary: 1,
    secondary: 0.6,
    tertiary: 0.15,
    inactive: 0.3,
    full: 1,
    none: 0,
    alpha1: 0.1,
    alpha2: 0.15,
    alpha3: 0.2,
    alpha4: 0.3,
    alpha5: 0.6
  },
  animation: {
    duration: {
      none: 0,
      xfast: 0.2,
      fast: 0.4,
      normal: 0.6,
      slow: 0.8,
      xslow: 1
    },
    delay: {
      none: 0,
      xfast: 0.02,
      fast: 0.04,
      normal: 0.06,
      slow: 0.08,
      xslow: 0.1
    },
    expressive: {
      timingFunction: 'cubic-bezier(0.8, -0.4, 0.2, 1.4)',
      delay: 0,
      duration: 0.6
    },
    expressiveEntrance: {
      timingFunction: 'cubic-bezier(0.1, 0.4, 0.16, 1.4)',
      delay: 0,
      duration: 0.4
    },
    expressiveExit: {
      timingFunction: 'cubic-bezier(0.8, -0.4, 0.8, 0.4)',
      delay: 0,
      duration: 0.2
    },
    standard: {
      timingFunction: 'cubic-bezier(0.6, 0, 0.1, 1)',
      delay: 0,
      duration: 0.6
    },
    standardEntrance: {
      timingFunction: 'cubic-bezier(0, 0, 0.15, 1)',
      delay: 0,
      duration: 0.2
    },
    standardExit: {
      timingFunction: 'cubic-bezier(0.9, 0, 1, 1)',
      delay: 0,
      duration: 0.2
    },
    utility: {
      timingFunction: 'cubic-bezier(0.4, 0.15, 0.1, 1)',
      delay: 0,
      duration: 0.4
    },
    utilityEntrance: {
      timingFunction: 'cubic-bezier(0, 0, 0.4, 1)',
      delay: 0,
      duration: 0.6
    },
    utilityExit: {
      timingFunction: 'cubic-bezier(0.4, 0, 1, 1)',
      delay: 0,
      duration: 0.6
    }
  },
  asset: {
    arrowLeft: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAAi0lEQVRIDWNgGAWjIfD//38JID5Fk5AAGqwKxPeA+D/VLQCaaQLEr0CGgwBVLQCa5wbEn0EGwwDVLAAaGA3Ev2AGw2iqWAA0rBiI/8EMRaYptgBoWDeygehsci1gIlcjWfqArqZdEMFcBLSEdpGMZAntkimSJbTLaEiW0K6oQLKEdoUdzJJRemiHAAD4n+yzPWCs7QAAAABJRU5ErkJggg==',
    arrowRight: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAAg0lEQVRIDWNgGAWjIYArBP7//38KiCVwyVMsDjQcBO4BsSrFhmEzAGw8hHgFpEywqaFIDMkCEPMzELtRZCC6ZjQLQNxfQByNro5sPhYLQEL/gLiYbEORNeKwACbcDVPLBGMMOhrmVDSapkFE00imaTKlaUajaVFB28Ju0CXrUQfhDAEAEgHss6NhpLQAAAAASUVORK5CYII=',
    backspaceOutline: 'data:image/png;base64,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',
    check: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACtSURBVHgBvdPdDcIgEAfwoy8Nb45QN3AGF2s36Ahu4gpuIDoBfSgfpdoTlCbEWEMh6T8hFzjyg5AAkBHOcQe5UWqspRx435sDpMYj6IYQwwVSEiJ2MKVUBWuzLSLl2HL+uxmNCGFO8yaL7RHxve6qRZoAuS4hxac8735elWVx7jrtMKL1o0Gcat9jhExHSukN/kUIFZ7MpDRtzE1isDRkAUtDvrA8ZI597FUf8gWH9P0b4gko9wAAAABJRU5ErkJggg=='
  },
  color: {
    palette: {
      'blue-20': '0xbecffeff',
      'blue-40': '0x93a9fdff',
      'blue-90': '0x000033ff',
      'grey-05': '0xf8f7faff',
      'grey-40': '0x929096ff',
      'grey-70': '0x48474bff',
      'grey-90': '0x181819ff'
    },
    white: '0xffffffff',
    black: '0x000000ff',
    grey: '0x8b8b97ff',
    red: '0xf0004dff',
    orange: '0xf95600ff',
    yellow: '0xffaa00ff',
    green: '0x0ac284ff',
    blue: '0x2970ffff',
    purple: '0x704bf7ff',
    material: '0x141417ff',
    materialBrand: '0x081414ff',
    overlay: '0x14141799',
    textNeutral: '0xf6f6f9ff',
    textNeutralSecondary: '0xf6f6f999',
    textNeutralTertiary: '0xf6f6f926',
    textNeutralDisabled: '0xf6f6f94d',
    textInverse: '0x141417ff',
    textInverseSecondary: '0x14141799',
    textInverseTertiary: '0x14141726',
    textInverseDisabled: '0x1414174d',
    textBrand: '0x19c2b5ff',
    textBrandSecondary: '0x19c2b599',
    textBrandTertiary: '0x19c2b526',
    textBrandDisabled: '0x19c2b54d',
    textPositive: '0x0ac284ff',
    textNegative: '0xf0004dff',
    textInfo: '0x2970ffff',
    textCaution: '0xf95600ff',
    fillTransparent: '0xf6f6f90',
    fillNeutral: '0xf6f6f9ff',
    fillNeutralSecondary: '0xf6f6f999',
    fillNeutralTertiary: '0xf6f6f926',
    fillNeutralDisabled: '0xf6f6f94d',
    fillInverse: '0x141417ff',
    fillInverseSecondary: '0x14141799',
    fillInverseTertiary: '0x14141726',
    fillInverseDisabled: '0x1414174d',
    fillBrand: '0x19c2b5ff',
    fillBrandSecondary: '0x19c2b599',
    fillBrandTertiary: '0x19c2b526',
    fillBrandDisabled: '0x19c2b54d',
    fillPositive: '0x0ac284ff',
    fillNegative: '0xf0004dff',
    fillInfo: '0x2970ffff',
    fillCaution: '0xf95600ff',
    strokeNeutral: '0xf6f6f9ff',
    strokeNeutralSecondary: '0xf6f6f999',
    strokeNeutralTertiary: '0xf6f6f926',
    strokeNeutralDisabled: '0xf6f6f94d',
    strokeInverse: '0x141417ff',
    strokeInverseSecondary: '0x14141799',
    strokeInverseTertiary: '0x14141726',
    strokeInverseDisabled: '0x1414174d',
    strokeBrand: '0x19c2b5ff',
    strokeBrandSecondary: '0x19c2b599',
    strokeBrandTertiary: '0x19c2b526',
    strokeBrandDisabled: '0x19c2b54d',
    strokePositive: '0x0ac284ff',
    strokeNegative: '0xf0004dff',
    strokeInfo: '0x2970ffff',
    strokeCaution: '0xf95600ff',
    interactiveNeutral: '0xffffff1a',
    interactiveNeutralFocus: '0xffffff33',
    interactiveNeutralFocusSoft: '0xffffff26',
    interactiveInverse: '0x1414171a',
    interactiveInverseFocus: '0x14141733',
    interactiveInverseFocusSoft: '0x14141726',
    interactiveBrand: '0x19c2b51a',
    interactiveBrandFocus: '0x19c2b533',
    interactiveBrandFocusSoft: '0x19c2b526',
    shadowNeutral: '0x14141726',
    shadowNeutralFocus: '0x14141726',
    shadowNeutralFocusSoft: '0x14141726',
    shadowNeutralText: '0x141417ff',
    shadowInverse: '0x14141726',
    shadowInverseFocus: '0x14141726',
    shadowInverseFocusSoft: '0x14141726',
    shadowInverseText: '0x141417ff',
    shadowBrand: '0x14141726',
    shadowBrandFocus: '0x14141726',
    shadowBrandFocusSoft: '0x14141726',
    shadowBrandText: '0x141417ff'
  },
  font: [
    {
      family: 'Inter',
      src: 'https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2',
      descriptors: { weight: '100 900' }
    }
  ],
  layout: {
    columnCount: 12,
    focusScale: 1.08,
    gutterX: 24,
    gutterY: 88,
    marginX: 152,
    marginY: 48,
    safe: 48,
    screenW: 1920,
    screenH: 1080
  },
  radius: { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  spacer: {
    none: 0,
    xxs: 2,
    xs: 4,
    sm: 6,
    md: 8,
    lg: 16,
    xl: 24,
    xxl: 32,
    xxxl: 48
  },
  stroke: { none: 0, sm: 2, md: 4, lg: 6, xl: 8 },
  typography: {
    display1: {
      fontFamily: 'Inter',
      fontSize: 72,
      lineHeight: 92,
      fontStyle: '600',
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: 4279505943
    },
    display2: {
      fontFamily: 'Inter',
      fontSize: 56,
      lineHeight: 72,
      fontStyle: '600',
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: 4279505943
    },
    headline1: {
      fontFamily: 'Inter',
      fontSize: 36,
      fontStyle: '600',
      lineHeight: 48,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: 4279505943
    },
    headline2: {
      fontFamily: 'Inter',
      fontSize: 32,
      fontStyle: '600',
      lineHeight: 44,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: 4279505943
    },
    headline3: {
      fontFamily: 'Inter',
      fontSize: 28,
      fontStyle: '600',
      lineHeight: 40,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: 4279505943
    },
    body1: {
      fontFamily: 'Inter',
      fontSize: 32,
      fontStyle: '400',
      lineHeight: 44,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: 4279505943
    },
    body2: {
      fontFamily: 'Inter',
      fontSize: 28,
      fontStyle: '400',
      lineHeight: 40,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: 4279505943
    },
    body3: {
      fontFamily: 'Inter',
      fontSize: 28,
      fontStyle: '400',
      lineHeight: 40,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: 4279505943
    },
    button1: {
      fontFamily: 'Inter',
      fontSize: 28,
      fontStyle: '600',
      lineHeight: 38,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: 4279505943
    },
    button2: {
      fontFamily: 'Inter',
      fontSize: 24,
      fontStyle: '600',
      lineHeight: 34,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: 4279505943
    },
    callout1: {
      fontFamily: 'Inter',
      fontSize: 24,
      fontStyle: '400',
      lineHeight: 32,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: 4279505943
    },
    caption1: {
      fontFamily: 'Inter',
      fontSize: 24,
      fontStyle: '400',
      lineHeight: 32,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: 4279505943
    },
    tag1: {
      fontFamily: 'Inter',
      fontSize: 20,
      fontStyle: '600',
      lineHeight: 24,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: 4279505943
    },
    footnote1: {
      fontFamily: 'Inter',
      fontSize: 20,
      fontStyle: '400',
      lineHeight: 28,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: 4279505943
    }
  },
  componentConfig: {
    Keyboard: {
      base: {
        keyProps: {
          delete: {
            title: null,
            icon: 'data:image/png;base64,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'
          }
        }
      }
    },
    Distractor: { defaultTone: 'brand' },
    FocusRing: {
      defaultTone: 'brand',
      base: {
        borderWidth: '0x000004ff',
        color: '0x0d9d9d9',
        spacing: -4,
        shouldAnimate: false,
        transitionColor: '0x0d9d9d9',
        secondaryColor: '0x0d9d9d9'
      }
    },
    Label: {
      defaultTone: 'brand',
      base: { radius: '0x000004ff' },
      brand: { backgroundColor: '0x19c2b599' }
    },
    Lozenge: {
      defaultTone: 'brand',
      base: {
        backgroundColor: '0x0f6f6f9',
        radius: '0x000006ff',
        highlightRadius: '0x0000065fa'
      },
      focused: {
        radius: '0x00000aff',
        highlightRadius: '0x00000a9f6',
        backgroundColor: '0x0f6f6f9'
      }
    },
    ProgressBar: {
      defaultTone: 'brand',
      base: { h: '0x000004ff', radius: '0x000004ff' }
    },
    Wave: { defaultTone: 'brand' },
    Button: {
      base: {
        radius: '0x000006ff',
        textStyle: { textColor: [ '#f6f6f9', 1 ] },
        contentColor: '0xf6f6f9ff'
      },
      focused: { radius: '0x00000aff' }
    },
    Card: {
      base: { radius: '0x000006ff' },
      focused: { radius: '0x00000aff' }
    },
    Key: {
      base: {
        baseWidth: '0x00003dff',
        height: '0x00003dff',
        minWidth: '0x00003dff'
      }
    },
    KeyboardSpacing: { base: { keySpacing: '0x000004ff' } },
    ListItem: {
      base: {
        radius: '0x000006ff',
        textStyle: { textColor: [ '#f6f6f9', 1 ] },
        titleTextStyle: { textColor: [ '#f6f6f9', 1 ] },
        descriptionTextStyle: { textColor: [ '#f6f6f9', 1 ] },
        contentColor: '0xf6f6f9ff'
      },
      focused: { radius: '0x00000aff' }
    },
    MetadataTile: {
      base: {
        titleTextStyle: {
          verticalAlign: 'middle',
          maxLinesSuffix: '...',
          shadow: true,
          shadowOffsetX: 1,
          shadowOffsetY: 2,
          shadowBlur: 0,
          shadowColor: 4279505943,
          fontFamily: 'Inter',
          fontSize: 32,
          fontStyle: '400',
          lineHeight: 44
        },
        descriptionTextStyle: {
          verticalAlign: 'middle',
          maxLinesSuffix: '...',
          shadow: true,
          shadowOffsetX: 1,
          shadowOffsetY: 2,
          shadowBlur: 0,
          shadowColor: 4279505943,
          fontFamily: 'Inter',
          fontSize: 28,
          fontStyle: '400',
          lineHeight: 40
        }
      },
      focused: {
        titleTextStyle: undefined,
        descriptionTextStyle: {
          verticalAlign: 'middle',
          maxLinesSuffix: '...',
          shadow: true,
          shadowOffsetX: 1,
          shadowOffsetY: 2,
          shadowBlur: 0,
          shadowColor: 4279505943,
          fontFamily: 'Inter',
          fontSize: 28,
          fontStyle: '400',
          lineHeight: 40
        }
      }
    },
    Surface: {
      defaultMode: { focused: { radius: 10 } },
      subComponents: { Radius: {} }
    },
    Tile: {
      base: { radius: '0x000006ff', metadataLocation: 'inset' },
      focused: { paddingY: '0x000018ff', radius: '0x00000aff' }
    }
  }
}