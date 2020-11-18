import React, { useContext, useEffect } from 'react';
import Projects from "../components/Project"
import NavigationContext from "../context/navigationContex"



function ProjectsPage() {
  const { navTabContext, setNavTabContext } = useContext(NavigationContext); 

  useEffect(() => {
    setNavTabContext({ activeNav: window.location.pathname })
    console.log("useeffect activated: ", navTabContext.activeNav)
    // setActivePill({ activeItemPill: window.location.pathname})

  }, [])

  return (
    <div>
      <Projects  />
    </div>
  )
}

export default ProjectsPage;

