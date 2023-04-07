import React from 'react'
import policyData from '../../../data/policies'

export default function page({params}) {
    const {slug} = params
    const policy = policyData.find((policy) => policy.slug === slug)
  return (
    <div>
        <div className='cont py-24 text-[var(--text-color)'>
            <h1 className='h2 mb-12 text-center'>{policy.title}</h1>
            <div className='prose prose-invert mx-auto' dangerouslySetInnerHTML={{__html: policy.body}}></div>
        </div>
    </div>
  )
}
