// Write your JS code here
// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {title, description, publishedDate} = blogItem

  return (
    <li className="blog-item-container">
      <div className="title-date-container">
        <h1 className="title">{title}</h1>
        <p className="date-and-description">{publishedDate}</p>
      </div>
      <p className="date-and-description">{description}</p>
    </li>
  )
}

export default BlogItem
