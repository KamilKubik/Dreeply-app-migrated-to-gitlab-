const title = 'Number #1 startup planning and analysis tool';
const description = 'By using ****** you can easily grow your business idea to the next level';

const SEO = {
  title,
  description,
  canonical: 'https://supersweetchilli.online', // This one is for google to know, what the major place of the content found somewhere is ??
  openGraph: {
    // To jest takie, jak wysyła się linka i pojawia się potem taki obrazek (chyba), no w każdym bądź razie, must have!
    type: 'website',
    locale: 'en_IE',
    url: 'https://supersweetchilli.online',
    title,
    description,
    images: [
      {
        url: 'https://supersweetchilli.online/images/openGrapImage.png...', // Tutaj możesz sobie podejrzeć na swojej stronie, jak wygląda zdjęcie, które będzie w Twoim openGraph'ie
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
};

export default SEO;
