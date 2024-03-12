"use client"

import React, {Fragment, useState} from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Listbox, Transition } from '@headlessui/react'
import { CustomFilterProps } from '@/types'

const CustomFilter = ({title, options}:CustomFilterProps) => {
  return (
    <div className='w-fit'>
      <div className='relative w}fit z-10'>
        <Listbox.Button className="custom-bilter_btn">
          <span>Filter</span>
        </Listbox.Button>
        
      </div>

    </div>
  )
}

export default CustomFilter