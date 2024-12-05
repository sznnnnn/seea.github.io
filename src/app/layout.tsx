export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SEEA - 个人作品集</title>
        <meta name="description" content="SEEA的个人作品集网站" />
      </head>
      <body>{children}</body>
    </html>
  )
} 