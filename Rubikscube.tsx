/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube_1: THREE.Mesh
    Cube_2: THREE.Mesh
    Cube_3: THREE.Mesh
    Cube_4: THREE.Mesh
    Cube_5: THREE.Mesh
    Cube_6: THREE.Mesh
    Cube_7: THREE.Mesh
  }
  materials: {
    black: THREE.MeshStandardMaterial
    red: THREE.MeshStandardMaterial
    white: THREE.MeshStandardMaterial
    green: THREE.MeshStandardMaterial
    blue: THREE.MeshStandardMaterial
    orange: THREE.MeshStandardMaterial
    yellow: THREE.MeshStandardMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/rubikscube.gltf') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 1.62, 0]} rotation={[0, 0.31, 0]}>
        <mesh geometry={nodes.Cube_1.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube_2.geometry} material={materials.red} />
        <mesh geometry={nodes.Cube_3.geometry} material={materials.white} />
        <mesh geometry={nodes.Cube_4.geometry} material={materials.green} />
        <mesh geometry={nodes.Cube_5.geometry} material={materials.blue} />
        <mesh geometry={nodes.Cube_6.geometry} material={materials.orange} />
        <mesh geometry={nodes.Cube_7.geometry} material={materials.yellow} />
      </group>
    </group>
  )
}

useGLTF.preload('/rubikscube.gltf')
