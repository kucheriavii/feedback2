import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

export default function AboutPage() {
  return (
    <Card>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium aliquam deleniti tenetur dignissimos accusamus libero facere voluptas sit, quae aliquid voluptates porro. Ipsum iure at numquam et ab officiis iusto.</p>
        <Link to="/">Back to home</Link>
    </Card>
  )
}
