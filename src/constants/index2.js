import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
  Ahmed,
  Assia,
  Sabrina,
  Houssem,
  Ahmmed,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Models",
  },
  {
    id: "product",
    title: "Exemples",
  },
  {
    id: "clients",
    title: "About",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Face recognition",
    content:
      "Using VGG-Face pre-trained model to extract facial features from input images, capturing unique characteristics such as shapes, textures, and patterns.Then using a classifier to match those features to known identities.We can use this model to authenticate individuals, streamline access control and it's an ideal solution for various applications.",
  },
  {
    id: "feature-2",
    icon: star,
    title: "Emotions recognition",
    content:
      "Through multiple layers of convolutional and pooling operations, the networks can extract meaningful visual features from facial expressions, such as eyebrow movements, eye shapes, and mouth curvature. By training on a diverse dataset, the CNNs can learn to recognize and differentiate between various emotions, including happiness, sadness, anger,tiredness, neutrality. This empowers the model to accurately classify emotions in real-time scenarios, opening up possibilities for applications in fields like sentiment analysis.",
  },
];

export const exemples = [
  {
    id: "feedback-1",
    name: "Ahmed",
    emotion: "Angry",
    img: Ahmmed,
  },

  {
    id: "feedback-3",
    name: "Assia",
    emotion: "Happy",
    img: Assia,
  },
  {
    id: "feedback-2",
    name: "Houssem",
    emotion: "Neutral",
    img: Houssem,
  },
  {
    id: "feedback-2",
    name: "Sabrina",
    emotion: "Happy",
    img: Sabrina,
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content: "Ahmed DJELLOULI, 4th grade data & Ai student at ESI-SBA",
    name: "Ahmed DJELLOULI",
    title: "Founder & Leader",
    img: Ahmed,
  },
  {
    id: "feedback-2",
    content: "Sabrina BELKHODJA, 4th grade data & Ai student at ESI-SBA",
    name: "Sabrina BELKHODJA",
    title: "Founder & Leader",
    img: Sabrina,
  },
  {
    id: "feedback-3",
    content: "Houssem SAIDOUNE, 4th grade data & Ai student at ESI-SBA",
    name: "Houssem SAIDOUNE",
    title: "Founder & Leader",
    img: Houssem,
  },
  {
    id: "feedback-4",
    content: "Assia Madani, 4th grade data & Ai student at ESI-SBA",
    name: "Assia Madani",
    title: "Founder & Leader",
    img: Assia,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
