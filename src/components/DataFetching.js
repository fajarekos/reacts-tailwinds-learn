import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Dropdown } from './dropdown/Dropdown'

function DataFetching() {
  const [ posts, setPosts ] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const response = await axios('https://jsonplaceholder.typicode.com/posts')

        setPosts(response.data)
      } catch (error) {
        console.error(error)
      }
    })();
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    //   .then((res) => {
    //     setPosts(res.data)
    //   })
    //   .catch((err) => {
    //     console.error(err)
    //   })
  },[])
  return (
    <div className="flex flex-wrap box-border px-3 py-2 border-gray-400">
      {
        posts.map(post => 
          <div className="text-gray-600 text-leftgit px-3 py-2 w-1/5 space-x-2 border-2 m-2 text-left rounded" key={post.id}>
            { post.body }
            <Dropdown />
          </div>
        )
      }
    </div>
  )
}

export default DataFetching
