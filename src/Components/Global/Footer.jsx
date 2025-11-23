import "../Styles/global.css"
const Footer = () => {
  return (
      <>
          <div className="footer">
              Created by <span className="mark">Empire Tech</span> { new Date().getFullYear()}
      </div>
      </>
  )
}

export default Footer