import React from 'react'
import Videos from './Videos'

const Videogrid = () => {
  return (
    <>
    <div className="flex justify-between">
    <h1>Latest Videos</h1>
    <h1>See All</h1>
    </div>
    <section>
        
    <div class="grid grid-cols-3 gap-4">
  <div><Videos/></div>
  <div><Videos/></div>
  <div><Videos/></div>
</div>
</section>
    </>
  )
}

export default Videogrid