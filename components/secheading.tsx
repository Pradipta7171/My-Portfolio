import React from 'react'

type SectionHeadingProps = {
  children: React.ReactNode;
}

const Secheading = ({children}:SectionHeadingProps) => {
  return (
    <h1 className="text-3xl font-medium capitalize mb-10 text-center dark:text-white">{children}</h1>
  )
}

export default Secheading;