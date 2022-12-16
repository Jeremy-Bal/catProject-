import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Experience from './Experience'

import './style.css'

const root = createRoot(document.querySelector('#root'))

root.render(
    <StrictMode>
        <Canvas
            camera={{
                position: [ 30, 30, 30 ]
            }}
        >
                
            <OrbitControls />
            <Experience />
        </Canvas>
    </StrictMode>
)