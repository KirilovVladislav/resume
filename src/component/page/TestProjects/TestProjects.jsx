import React from 'react'
import { useSelector } from 'react-redux'

import styles from './TestProjects.module.scss'
import { Typography, List, Item } from '../../index'

export const TestProjects = () => {
  const { testProjects } = useSelector((state) => state.project)

  return (
    <section className={styles.testProjects}>
      <Typography className={styles.title} as={`h3`}>
        Тестовые проекты
      </Typography>
      <List direction={`column`}>
        {testProjects.map((item) => (
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
