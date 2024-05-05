export const theme = {
    media: {
      mobile: (styles) => `
          @media (max-width: 767px) {
            ${styles}
          }
        `,
      // tablet: (styles) => `
      //     @media (min-width: 768px) and (max-width: 1023px) {
      //       ${styles}
      //     }
      //   `,
      desktop: (styles) => `
          @media (min-width: 768px) {
            ${styles}
          }
        `,
    },
  };