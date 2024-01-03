import React from 'react'

const Blog = () => {
  return (
    <div id="blog" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'> 
        <h1 className="text-4xl font-bold text-center text-black pl-2 pr-2">
        {'< Blog />'}
        </h1>
        <hr />
        <p className="text-center text-xl py-8 font-bold">These are some of my articles</p>
        <div className="grid sm:grid-cols-2 gap-12">
            <h3>Article Title</h3>            
            <p>Nisi laboris minim duis reprehenderit est incididunt incididunt dolor ut. Eu officia in nostrud consectetur ullamco eu amet eu proident mollit qui eiusmod. Culpa laboris sint consectetur voluptate irure magna amet nostrud in irure Lorem nostrud. Cillum fugiat in irure anim laborum commodo cillum non non consectetur commodo ullamco. In in pariatur amet eiusmod consequat incididunt. Magna sit aliqua minim exercitation aliqua do labore amet anim tempor dolor labore eiusmod. Irure cupidatat magna fugiat id in laboris labore dolor aliqua in dolore.</p>
        </div>
    </div>
  )
}

export default Blog