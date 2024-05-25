/* * @type {import('next').NextConfig}
const nextConfig = {
  // swcMinify: false,
  transpilePackages: ['crypto-js'],
} */

module.exports = {
  /* transpilePackage: ['crypto-js'], */
  /* api: {
    bodyParser: {
      sizeLimit: '10kb'
    }
  } */
}

/*
// next.config.js

module.exports = {
  async headers() {
    return [
      {
        source: '/api/:path*', // API rotalarını belirtin
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://www.example.com', // Sadece bu kök alanından gelen istekleri kabul et
          },
          // Diğer CORS başlıklarını buraya ekleyebilirsiniz (örneğin, Access-Control-Allow-Methods, Access-Control-Allow-Headers)
        ],
      },
    ];
  },
};


*/