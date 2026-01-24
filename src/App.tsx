import { lazy, Suspense } from 'react'

const LandingPage = lazy(() => import('./components/LandingPage.tsx'))

function App() {
  return (
    <Suspense fallback={<div className="suspense-fallback" />}>
      <LandingPage />
    </Suspense>
  )
}

export default App
