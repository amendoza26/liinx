import { useState } from 'react'
import { Link } from 'react-router-dom'

const SubMenu = ({item}) => {

    const [subnav, setSubnav] = useState(false);
  
    const showSubnav = () => setSubnav(!subnav);

  return (
    <>
        <Link to={item.path} onClick={item.submenuItems && showSubnav}>
            <img src={`./${item.src}.png`} />
            <span className={`hidden origin-left duration-200 `}>
                {item.title}
            </span>
        </Link>
        {subnav &&
        item.subNav.map((item, index) => {
          return (
            <Link to={item.path} key={index}>
              <span>{item.title}</span>
            </Link>
          );
        })}
    </>
  )
}

export default SubMenu