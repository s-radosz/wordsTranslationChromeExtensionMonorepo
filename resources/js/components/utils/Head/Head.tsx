import * as React from 'react'
import { Helmet } from 'react-helmet'

type headType = {
  title: string
}

const Head = ({ title }: headType) => {
  return (
    <Helmet>
      <meta charSet='utf-8' />
      <meta name='author' content='Szymon Radosz' />
      <meta
        name='description'
        content='Praktyczny Angielski - Ucz się angielskiego jakiego potrzebujesz!'
      />
      <meta
        name='keywords'
        content='angielski, nauka angielskiego, nauka angielskiego online, nauka angielskiego dla dzieci, nauka angielskiego online za darmo, nauka angielskiego w domu'
      />
      <meta http-equiv='x-ua-compatible' content='ie=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />

      <title>Praktyczny Angielski - {title}</title>

      <link
        href='https://fonts.googleapis.com/css?family=Nunito:200,600'
        rel='stylesheet'
        type='text/css'
      />
      {/* <link rel="shortcut icon" src={favicon}/> */}

      {/* <link rel="stylesheet" href="/css/bootstrap.min.css" />
            <link rel="stylesheet" href="/css/style.css" />
            <link rel="stylesheet" href="/css/responsive.css" /> */}
    </Helmet>
  )
}

export default Head
