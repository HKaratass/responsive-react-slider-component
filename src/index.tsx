import { createRoot } from 'react-dom/client'
import Slide from './Slide.tsx'
import './style/body.css'
import { Outer, SlideFrame } from './style/TempFrame.styled.ts'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Outer> {/**Sayfayı temsilen */}
      <SlideFrame> {/**Slide alanını temsilen */}
        <Slide />
      </SlideFrame>
    </Outer>
  </BrowserRouter>,
)
