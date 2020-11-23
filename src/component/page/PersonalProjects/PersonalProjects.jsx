import React from 'react'
import { useSelector } from 'react-redux'

import styles from './PersonalProjects.module.scss'
import { Typography, List, Item } from '../../index'

export const PersonalProjects = () => {
  const { personalProjects } = useSelector((state) => state.project)

  return (
    <section className={styles.personalProjects}>
      <Typography className={styles.title} as={`h3`}>
        Личные проекты
      </Typography>
      <List direction={`column`}>
        {personalProjects.map((item) => (
          <Item className={styles.item} key={item.id}>
            <Typography as={`h4`}>{`${item.name}`}</Typography>
            <a className={styles.link} href={item.repo} target="_blank">
              <Typography mode={`link`}>ссылка на репозиторий</Typography>
            </a>
            <a className={styles.link} href={item.page} target="_blank">
              <Typography mode={`link`}>ссылка на страницу</Typography>
            </a>
          </Item>
        ))}
      </List>
    </section>
  )
}
