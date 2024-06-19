module.exports = {
  async redirects() {
    return [

        {
            source:"/((?!fr$|tn$|en$|api/sendmessage$).*)",
            destination: "/tn",
            permanent: false
        }
      ]
  },
}