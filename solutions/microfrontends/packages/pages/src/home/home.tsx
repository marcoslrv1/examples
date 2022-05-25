import { useState, useEffect } from 'react'
import { Layout, Page, Text, Code, Link } from '@vercel/examples-ui'
import { Button, Quote } from '@acme/design-system'
import { matchingTextColor, randomColor } from '@acme/utils'
import Navbar from '../components/navbar'

export default function Home() {
  const [bgColor, setBgColor] = useState('')
  const [textColor, setTextColor] = useState('')
  const changeColor = () => {
    const bg = randomColor()
    setBgColor(bg)
    setTextColor(matchingTextColor(bg))
  }

  useEffect(changeColor, [])

  return (
    <Page>
      <Navbar />
      <Text variant="h1" className="mb-6">
        Microfrontends
      </Text>
      <Text className="mb-4">
        In this Microfrontends app we have a Monorepo with multiple packages,
        each using TypeScript and going through a different Microfrontend
        tehnique:
      </Text>
      <Text variant="h2" className="mb-6">
        apps/main
      </Text>
      <Text className="mb-4">
        This is the current Next.js site you&apos;re looking at. It uses{' '}
        <Link
          href="https://github.com/martpie/next-transpile-modules"
          target="_blank"
        >
          next-transpile-modules
        </Link>{' '}
        to enable CSS Modules and HMR for packages that ship uncompiled code,
        like is the case for <Code>packages/pages</Code> which contains the
        pages used in this application.
      </Text>
      <Text variant="h2" className="mb-6">
        packages/acme-design-system
      </Text>
      <Text className="mb-4">
        Example of how you could build a Design System, it&apos;s a set of React
        Components that ship with CSS Modules.
      </Text>
      {bgColor && textColor && (
        <>
          <Button className="mb-4">This is a button</Button>
        </>
      )}
      <Quote className="mb-4">
        This is the <Code>Quote</Code> component in the design system.
      </Quote>
      <Text variant="h2" className="mb-6">
        packages/pages
      </Text>
      <Text className="mb-4">
        Works in the same way as <Code>packages/acme-design-system</Code> but
        instead of building a design system it&apos;s about having shared
        components that represent pages.
      </Text>
      <Text className="mb-4">
        You&apos;re currently looking at the Home page, defined in{' '}
        <Code>packages/pages/src/home</Code> and imported by{' '}
        <Code>apps/main/pages/index.tsx</Code>.
      </Text>
      <Text variant="h2" className="mb-6">
        packages/utils
      </Text>
      <Text className="mb-4">
        This package exports utility functions, the package ships transpiled
        code so it&apos;s not needed to use <Code>next-transpile-modules</Code>{' '}
        in this case.
      </Text>
      <Text className="mb-4">
        The button below uses an utility function from this package to change
        its color when clicked:
      </Text>
      {bgColor && textColor && (
        <>
          <Button
            className="mb-4"
            style={{
              backgroundColor: bgColor,
              color: textColor,
              borderColor: textColor,
            }}
            onClick={changeColor}
          >
            Change Color
          </Button>
        </>
      )}
      <Text variant="h2" className="mb-6">
        apps/docs (Multi Zones)
      </Text>
      <Text className="mb-4">
        Next.js application that takes care of handling the pages for{' '}
        <Code>/docs/**</Code>.
      </Text>
      <Text className="mb-4">
        This example shows how Multi Zones can be managed in Next.js to merge
        multiple Next.js applications in the same domain.
      </Text>
      <Text className="mb-4">
        Compared with the approaches above, there&apos;s an actual UX impact
        when doing multi zones because Next.js assets of different builds
        can&apos;t be shared so they have to be downloaded again and transitions
        are a full page refresh.
      </Text>
      <Text className="mb-4">
        Local development can also be affected by HMR because changes to one app
        outside its domain don&apos;t live reload (<Code>apps/main</Code> lives
        in port 3000, and <Code>apps/docs</Code> in 3001).
      </Text>
    </Page>
  )
}

Home.Layout = Layout
