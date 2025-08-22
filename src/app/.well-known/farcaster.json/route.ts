export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL;

  const config = {
    "accountAssociation": {
      "header": "eyJmaWQiOjM1MDkxMSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDJGREVmM0Y0NzBlQ2QyQmM5YTk3NzU2OEM0M0FEMzg2MGMxNjExRDgifQ",
      "payload": "eyJkb21haW4iOiJjb21wdS1uZXctZnJhbWUudmVyY2VsLmFwcCJ9",
      "signature": "MHhkZGNkMTdhNGJlNDc3OTUyMDFhYjU4ZDc5MGMwN2IzNDA5YzA2OGJlMDRjMWU2NDM4Yjk0YzAyOTdhZTVkZjBjMGIxNGIwMzRhOTI4MmU5MDczNzE0ZGI1ODU5OTE4NDUzNjZiNDhiNzk3NGJkYjk2OTNlNWMxZDA0ZWE5M2UwYzFj"
    },
    frame: {
      version: "1",
      name: "Frames v2 Demo",
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
