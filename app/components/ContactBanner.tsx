import React from 'react'
import contact from '../../data/contactData'
import Link from 'next/link'

export default function ContactBanner() {
  return (
    <div className='bg-amber-400 text-dark h4'>
        <Link className='block text-center py-1 px-2 cont hover:text-acc2 trans underline' href={`tel:${contact.phone}`}>Call us now: {contact.phone}</Link>
    </div>
  )
}
