declare namespace _default {
  let name: string;
  namespace alpha {
    let primary: number;
    let secondary: number;
    let tertiary: number;
    let inactive: number;
    let full: number;
    let none: number;
    let alpha1: number;
    let alpha2: number;
    let alpha3: number;
    let alpha4: number;
    let alpha5: number;
  }
  namespace animation {
    namespace duration {
      let none_1: number;
      export { none_1 as none };
      export let xfast: number;
      export let fast: number;
      export let normal: number;
      export let slow: number;
      export let xslow: number;
    }
    namespace delay {
      let none_2: number;
      export { none_2 as none };
      let xfast_1: number;
      export { xfast_1 as xfast };
      let fast_1: number;
      export { fast_1 as fast };
      let normal_1: number;
      export { normal_1 as normal };
      let slow_1: number;
      export { slow_1 as slow };
      let xslow_1: number;
      export { xslow_1 as xslow };
    }
    namespace expressive {
      export let timingFunction: string;
      let delay_1: number;
      export { delay_1 as delay };
      let duration_1: number;
      export { duration_1 as duration };
    }
    namespace expressiveEntrance {
      let timingFunction_1: string;
      export { timingFunction_1 as timingFunction };
      let delay_2: number;
      export { delay_2 as delay };
      let duration_2: number;
      export { duration_2 as duration };
    }
    namespace expressiveExit {
      let timingFunction_2: string;
      export { timingFunction_2 as timingFunction };
      let delay_3: number;
      export { delay_3 as delay };
      let duration_3: number;
      export { duration_3 as duration };
    }
    namespace standard {
      let timingFunction_3: string;
      export { timingFunction_3 as timingFunction };
      let delay_4: number;
      export { delay_4 as delay };
      let duration_4: number;
      export { duration_4 as duration };
    }
    namespace standardEntrance {
      let timingFunction_4: string;
      export { timingFunction_4 as timingFunction };
      let delay_5: number;
      export { delay_5 as delay };
      let duration_5: number;
      export { duration_5 as duration };
    }
    namespace standardExit {
      let timingFunction_5: string;
      export { timingFunction_5 as timingFunction };
      let delay_6: number;
      export { delay_6 as delay };
      let duration_6: number;
      export { duration_6 as duration };
    }
    namespace utility {
      let timingFunction_6: string;
      export { timingFunction_6 as timingFunction };
      let delay_7: number;
      export { delay_7 as delay };
      let duration_7: number;
      export { duration_7 as duration };
    }
    namespace utilityEntrance {
      let timingFunction_7: string;
      export { timingFunction_7 as timingFunction };
      let delay_8: number;
      export { delay_8 as delay };
      let duration_8: number;
      export { duration_8 as duration };
    }
    namespace utilityExit {
      let timingFunction_8: string;
      export { timingFunction_8 as timingFunction };
      let delay_9: number;
      export { delay_9 as delay };
      let duration_9: number;
      export { duration_9 as duration };
    }
  }
  namespace asset {
    let arrowLeft: string;
    let arrowRight: string;
    let backspaceOutline: string;
    let check: string;
  }
  namespace color {
    let palette: {
      'blue-20': string;
      'blue-40': string;
      'blue-90': string;
      'grey-05': string;
      'grey-40': string;
      'grey-70': string;
      'grey-90': string;
    };
    let white: string;
    let black: string;
    let grey: string;
    let red: string;
    let orange: string;
    let yellow: string;
    let green: string;
    let blue: string;
    let purple: string;
    let material: string;
    let materialBrand: string;
    let overlay: string;
    let textNeutral: string;
    let textNeutralSecondary: string;
    let textNeutralTertiary: string;
    let textNeutralDisabled: string;
    let textInverse: string;
    let textInverseSecondary: string;
    let textInverseTertiary: string;
    let textInverseDisabled: string;
    let textBrand: string;
    let textBrandSecondary: string;
    let textBrandTertiary: string;
    let textBrandDisabled: string;
    let textPositive: string;
    let textNegative: string;
    let textInfo: string;
    let textCaution: string;
    let fillTransparent: string;
    let fillNeutral: string;
    let fillNeutralSecondary: string;
    let fillNeutralTertiary: string;
    let fillNeutralDisabled: string;
    let fillInverse: string;
    let fillInverseSecondary: string;
    let fillInverseTertiary: string;
    let fillInverseDisabled: string;
    let fillBrand: string;
    let fillBrandSecondary: string;
    let fillBrandTertiary: string;
    let fillBrandDisabled: string;
    let fillPositive: string;
    let fillNegative: string;
    let fillInfo: string;
    let fillCaution: string;
    let strokeNeutral: string;
    let strokeNeutralSecondary: string;
    let strokeNeutralTertiary: string;
    let strokeNeutralDisabled: string;
    let strokeInverse: string;
    let strokeInverseSecondary: string;
    let strokeInverseTertiary: string;
    let strokeInverseDisabled: string;
    let strokeBrand: string;
    let strokeBrandSecondary: string;
    let strokeBrandTertiary: string;
    let strokeBrandDisabled: string;
    let strokePositive: string;
    let strokeNegative: string;
    let strokeInfo: string;
    let strokeCaution: string;
    let interactiveNeutral: string;
    let interactiveNeutralFocus: string;
    let interactiveNeutralFocusSoft: string;
    let interactiveInverse: string;
    let interactiveInverseFocus: string;
    let interactiveInverseFocusSoft: string;
    let interactiveBrand: string;
    let interactiveBrandFocus: string;
    let interactiveBrandFocusSoft: string;
    let shadowNeutral: string;
    let shadowNeutralFocus: string;
    let shadowNeutralFocusSoft: string;
    let shadowNeutralText: string;
    let shadowInverse: string;
    let shadowInverseFocus: string;
    let shadowInverseFocusSoft: string;
    let shadowInverseText: string;
    let shadowBrand: string;
    let shadowBrandFocus: string;
    let shadowBrandFocusSoft: string;
    let shadowBrandText: string;
  }
  let font: never[];
  namespace layout {
    let columnCount: number;
    let focusScale: number;
    let gutterX: number;
    let gutterY: number;
    let marginX: number;
    let marginY: number;
    let safe: number;
    let screenW: number;
    let screenH: number;
  }
  namespace radius {
    let none_3: number;
    export { none_3 as none };
    export let xs: number;
    export let sm: number;
    export let md: number;
    export let lg: number;
    export let xl: number;
  }
  namespace spacer {
    let none_4: number;
    export { none_4 as none };
    export let xxs: number;
    let xs_1: number;
    export { xs_1 as xs };
    let sm_1: number;
    export { sm_1 as sm };
    let md_1: number;
    export { md_1 as md };
    let lg_1: number;
    export { lg_1 as lg };
    let xl_1: number;
    export { xl_1 as xl };
    export let xxl: number;
    export let xxxl: number;
  }
  namespace stroke {
    let none_5: number;
    export { none_5 as none };
    let sm_2: number;
    export { sm_2 as sm };
    let md_2: number;
    export { md_2 as md };
    let lg_2: number;
    export { lg_2 as lg };
    let xl_2: number;
    export { xl_2 as xl };
  }
  namespace typography {
    namespace display1 {
      let fontFamily: string;
      let fontSize: number;
      let lineHeight: number;
      let fontStyle: string;
      let verticalAlign: string;
      let textBaseline: string;
    }
    namespace display2 {
      let fontFamily_1: string;
      export { fontFamily_1 as fontFamily };
      let fontSize_1: number;
      export { fontSize_1 as fontSize };
      let lineHeight_1: number;
      export { lineHeight_1 as lineHeight };
      let fontStyle_1: string;
      export { fontStyle_1 as fontStyle };
      let verticalAlign_1: string;
      export { verticalAlign_1 as verticalAlign };
      let textBaseline_1: string;
      export { textBaseline_1 as textBaseline };
    }
    namespace headline1 {
      let fontFamily_2: string;
      export { fontFamily_2 as fontFamily };
      let fontSize_2: number;
      export { fontSize_2 as fontSize };
      let fontStyle_2: string;
      export { fontStyle_2 as fontStyle };
      let lineHeight_2: number;
      export { lineHeight_2 as lineHeight };
      let verticalAlign_2: string;
      export { verticalAlign_2 as verticalAlign };
      let textBaseline_2: string;
      export { textBaseline_2 as textBaseline };
    }
    namespace headline2 {
      let fontFamily_3: string;
      export { fontFamily_3 as fontFamily };
      let fontSize_3: number;
      export { fontSize_3 as fontSize };
      let fontStyle_3: string;
      export { fontStyle_3 as fontStyle };
      let lineHeight_3: number;
      export { lineHeight_3 as lineHeight };
      let verticalAlign_3: string;
      export { verticalAlign_3 as verticalAlign };
      let textBaseline_3: string;
      export { textBaseline_3 as textBaseline };
    }
    namespace headline3 {
      let fontFamily_4: string;
      export { fontFamily_4 as fontFamily };
      let fontSize_4: number;
      export { fontSize_4 as fontSize };
      let fontStyle_4: string;
      export { fontStyle_4 as fontStyle };
      let lineHeight_4: number;
      export { lineHeight_4 as lineHeight };
      let verticalAlign_4: string;
      export { verticalAlign_4 as verticalAlign };
      let textBaseline_4: string;
      export { textBaseline_4 as textBaseline };
    }
    namespace body1 {
      let fontFamily_5: string;
      export { fontFamily_5 as fontFamily };
      let fontSize_5: number;
      export { fontSize_5 as fontSize };
      let fontStyle_5: string;
      export { fontStyle_5 as fontStyle };
      let lineHeight_5: number;
      export { lineHeight_5 as lineHeight };
      let verticalAlign_5: string;
      export { verticalAlign_5 as verticalAlign };
      let textBaseline_5: string;
      export { textBaseline_5 as textBaseline };
    }
    namespace body2 {
      let fontFamily_6: string;
      export { fontFamily_6 as fontFamily };
      let fontSize_6: number;
      export { fontSize_6 as fontSize };
      let fontStyle_6: string;
      export { fontStyle_6 as fontStyle };
      let lineHeight_6: number;
      export { lineHeight_6 as lineHeight };
      let verticalAlign_6: string;
      export { verticalAlign_6 as verticalAlign };
      let textBaseline_6: string;
      export { textBaseline_6 as textBaseline };
    }
    namespace body3 {
      let fontFamily_7: string;
      export { fontFamily_7 as fontFamily };
      let fontSize_7: number;
      export { fontSize_7 as fontSize };
      let fontStyle_7: string;
      export { fontStyle_7 as fontStyle };
      let lineHeight_7: number;
      export { lineHeight_7 as lineHeight };
      let verticalAlign_7: string;
      export { verticalAlign_7 as verticalAlign };
      let textBaseline_7: string;
      export { textBaseline_7 as textBaseline };
    }
    namespace button1 {
      let fontFamily_8: string;
      export { fontFamily_8 as fontFamily };
      let fontSize_8: number;
      export { fontSize_8 as fontSize };
      let fontStyle_8: string;
      export { fontStyle_8 as fontStyle };
      let lineHeight_8: number;
      export { lineHeight_8 as lineHeight };
      let verticalAlign_8: string;
      export { verticalAlign_8 as verticalAlign };
      let textBaseline_8: string;
      export { textBaseline_8 as textBaseline };
    }
    namespace button2 {
      let fontFamily_9: string;
      export { fontFamily_9 as fontFamily };
      let fontSize_9: number;
      export { fontSize_9 as fontSize };
      let fontStyle_9: string;
      export { fontStyle_9 as fontStyle };
      let lineHeight_9: number;
      export { lineHeight_9 as lineHeight };
      let verticalAlign_9: string;
      export { verticalAlign_9 as verticalAlign };
      let textBaseline_9: string;
      export { textBaseline_9 as textBaseline };
    }
    namespace callout1 {
      let fontFamily_10: string;
      export { fontFamily_10 as fontFamily };
      let fontSize_10: number;
      export { fontSize_10 as fontSize };
      let fontStyle_10: string;
      export { fontStyle_10 as fontStyle };
      let lineHeight_10: number;
      export { lineHeight_10 as lineHeight };
      let verticalAlign_10: string;
      export { verticalAlign_10 as verticalAlign };
      let textBaseline_10: string;
      export { textBaseline_10 as textBaseline };
    }
    namespace caption1 {
      let fontFamily_11: string;
      export { fontFamily_11 as fontFamily };
      let fontSize_11: number;
      export { fontSize_11 as fontSize };
      let fontStyle_11: string;
      export { fontStyle_11 as fontStyle };
      let lineHeight_11: number;
      export { lineHeight_11 as lineHeight };
      let verticalAlign_11: string;
      export { verticalAlign_11 as verticalAlign };
      let textBaseline_11: string;
      export { textBaseline_11 as textBaseline };
    }
    namespace tag1 {
      let fontFamily_12: string;
      export { fontFamily_12 as fontFamily };
      let fontSize_12: number;
      export { fontSize_12 as fontSize };
      let fontStyle_12: string;
      export { fontStyle_12 as fontStyle };
      let lineHeight_12: number;
      export { lineHeight_12 as lineHeight };
      let verticalAlign_12: string;
      export { verticalAlign_12 as verticalAlign };
      let textBaseline_12: string;
      export { textBaseline_12 as textBaseline };
    }
    namespace footnote1 {
      let fontFamily_13: string;
      export { fontFamily_13 as fontFamily };
      let fontSize_13: number;
      export { fontSize_13 as fontSize };
      let fontStyle_13: string;
      export { fontStyle_13 as fontStyle };
      let lineHeight_13: number;
      export { lineHeight_13 as lineHeight };
      let verticalAlign_13: string;
      export { verticalAlign_13 as verticalAlign };
      let textBaseline_13: string;
      export { textBaseline_13 as textBaseline };
    }
  }
  namespace componentConfig {
    namespace Keyboard {
      namespace base {
        namespace keyProps {
          export namespace _delete {
            let title: null;
            let icon: string;
          }
          export { _delete as delete };
        }
      }
    }
  }
}
export default _default;
//# sourceMappingURL=themeStyles.l3.d.ts.map
