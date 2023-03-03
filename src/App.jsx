import React, { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Route, Switch, useHistory, Redirect } from 'react-router-dom'
import { compose } from 'redux'
import { ThemeProvider } from 'styled-components/macro'

import styles from './App.module.scss'
import { lightTheme, darkTheme } from './component/theme'
import {
  GlobalStyle,
  Typography,
  List,
  Item,
  StyledNavLink,
  Toggler,
} from './component'
import { About } from './component/page/About/About'
import { PersonalProjects } from './component/page/PersonalProjects/PersonalProjects'
import { TestProjects } from './component/page/TestProjects/TestProjects'
import { Resume } from './component/page/Resume/Resume'

const App = () => {
  const history = useHistory()
  const { name, surname } = useSelector((state) => state.about)
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [pathName, setPathName] = useState(history.location.pathname.substr(1))

  useEffect(() => {
    setIsDarkTheme(JSON.parse(localStorage.getItem(`isDarkTheme`)) || false)
  }, [])

  useEffect(() => {
    localStorage.setItem(`isDarkTheme`, JSON.stringify(isDarkTheme))
  }, [isDarkTheme])

  const Handle = {
    toggleTheme() {
      setIsDarkTheme((prev) => !prev)
    },
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <main>
        <header className={`${styles.header}`}>
          <Typography
            className={styles.headerTitle}
            onClick={() => setPathName(`about`)}
            as={NavLink}
            to={`/about`}
            bold={700}
          >
            {pathName === `about` ? `Личные данные` : `${name} ${surname}`}
          </Typography>
          <Toggler
            className={`${styles.toggler} ${isDarkTheme && `active`}`}
            onClick={Handle.toggleTheme}
          >
            <Typography className={`visually-hidden`}>
              {`включить ${isDarkTheme ? `светлую` : `темную`} тему`}
            </Typography>
          </Toggler>

          <nav className={`${styles.nav}`}>
            <List>
              <Item onClick={() => setPathName(`resume`)}>
                <Typography
                  className={styles.navLink}
                  as={StyledNavLink}
                  to={`/resume`}
                  mode={`link`}
                >
                  {`резюме`}
                </Typography>
              </Item>
              <Item onClick={() => setPathName(`apps`)}>
                <Typography
                  className={styles.navLink}
                  as={StyledNavLink}
                  to={`/personal-projects`}
                  mode={`link`}
                >
                  {`личные пректы`}
                </Typography>
              </Item>
              <Item onClick={() => setPathName(`test`)}>
                <Typography
                  className={styles.navLink}
                  as={StyledNavLink}
                  to={`/test-projects`}
                  mode={`link`}
                >
                  {`тестовые задания`}
                </Typography>
              </Item>
            </List>
          </nav>
        </header>

        <Switch>
          <Route path={`/`} exact render={() => <Redirect to={`/Resume`} />} />
          <Route path={`/about`} render={() => <About />} />
          <Route path={`/resume`} render={() => <Resume />} />
          <Route
            path={`/personal-projects`}
            render={() => <PersonalProjects />}
          />
          <Route path={`/test-projects`} render={() => <TestProjects />} />
        </Switch>
      </main>
    </ThemeProvider>
  )
}

export default compose(memo)(App)
