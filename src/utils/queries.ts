export const MODULES_QUERY = `
  modules[]{
    ...,
    _type == 'hero' => { ..., headlineColor{hex}, subheadlineColor{hex}, buttonColor{hex}, buttonTextColor{hex}, backgroundColor{hex}, backgroundColorEnd{hex}, gradientAngle },
    _type == 'ctaBanner' => { ..., headingColor{hex}, subheadingColor{hex}, buttonColor{hex}, buttonTextColor{hex}, backgroundColor{hex}, backgroundColorEnd{hex}, gradientAngle },
    _type == 'featuredProduct' => { ..., headingColor{hex}, backgroundColor{hex}, backgroundColorEnd{hex}, gradientAngle, cardColor{hex}, productTitleColor{hex}, textColor{hex}, buttonColor{hex}, buttonTextColor{hex}, product->{title, price, description, productImage, buyLink, accentColor{hex}} },
    _type == 'recentPosts' => { ..., headingColor{hex}, descriptionColor{hex}, backgroundColor{hex}, backgroundColorEnd{hex}, gradientAngle, "posts": *[_type == "post"] | order(publishedAt desc)[0..2] { title, slug, excerpt, mainImage, publishedAt, accentColor{hex} } },
    _type == 'features' => { ..., titleColor{hex}, backgroundColor{hex}, backgroundColorEnd{hex}, gradientAngle, cardBackgroundColor{hex}, cardTitleColor{hex}, cardTextColor{hex}, badgeColor{hex}, badgeTextColor{hex} },
    _type == 'gallery' => { ..., headlineColor{hex}, subheadingColor{hex}, backgroundColor{hex}, backgroundColorEnd{hex}, gradientAngle, items[]{ mediaType, caption, alt, videoUrl, "audioUrl": audioFile.asset->url, image{asset->, hotspot} } },
    _type == 'textWithImage' => { ..., headingColor{hex}, taglineColor{hex}, textColor{hex}, backgroundColor{hex}, backgroundColorEnd{hex}, gradientAngle, image{ asset->, hotspot } },
    _type == 'testimonialSection' => { ..., headingColor{hex}, backgroundColor{hex}, backgroundColorEnd{hex}, gradientAngle, testimonials[]{ ..., quoteColor{hex}, authorColor{hex}, roleColor{hex} } },
    _type == 'contactForm' => { ..., headingColor{hex}, subheadingColor{hex}, buttonColor{hex}, buttonTextColor{hex}, backgroundColor{hex}, backgroundColorEnd{hex}, gradientAngle }
  }
`;