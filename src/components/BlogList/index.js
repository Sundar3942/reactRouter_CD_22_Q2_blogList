// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  console.log(blogsList)

  return (
    <ul className="blog-list-container">
      {blogsList.map(eachItem => (
        <BlogItem blogItem={eachItem} key={eachItem.id} />
      ))}
    </ul>
  )
}

export default BlogList
