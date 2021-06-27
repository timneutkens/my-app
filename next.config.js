module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "(?<hostname>.+)",
          },
        ],
        destination:
          "https://enlm61dca1ec.x.pipedream.net/:path*?x-host=:hostname",
      },
    ];
  },
};
