module.exports = {
    production: {
        db: {host:'127.0.0.1', port: 6379},
        app: {
          name: 'Speakup' //server name
        },
        port: 8000,
        media: true,
        p2p: false,
        sessionType: 0,
        expressErrorHandlerOptions: {},
        phpUrl: "https://hostname/api", /*hostname*/
        nuves:  [
			{
				serviceId: "",
				serviceKey: "",
				host: "http://127.0.0.1:3000/"
			},
			//add more nuve config if needed
		],
        baseUrl: "/vsr/",
        optimized: true,
        googleTag: "" //google tag for tracking
   }
}
