import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './About.module.scss'
import { Typography, List, Item } from '../../index'
import { setActivePage } from '../../../slice/appSlice'

export const About = ({}) => {
  const dispatch = useDispatch()
  const {
    name,
    surname,
    age,
    lookingForAJob,
    tel,
    email,
    github,
    instagram,
  } = useSelector((state) => state.about)

  useEffect(() => {
    dispatch(setActivePage(`about`))
  }, [])

  return (
    <section className={styles.about}>
      <img
        className={styles.avatar}
        alt={`Моя фотография`}
        src={require('../../../assets/img/avatar.jpeg')}
      ></img>
      <List className={styles.info} direction={`column`}>
        <Item>
          <Typography bold={700}>{`Имя: `}</Typography>
          <Typography>{`${name} ${surname}`}</Typography>
        </Item>
        <Item>
          <Typography bold={700}>{`Возраст: `}</Typography>
          <Typography>{`${age}`}</Typography>
        </Item>
        <Item>
          <Typography bold={700}>{`В поиске работы: `}</Typography>
          <Typography>{`${lookingForAJob ? `да` : `нет`}`}</Typography>
        </Item>
        <Item>
          <Typography bold={700}>{`Телефон: `}</Typography>
          <a href={`tel:${tel}`}>
            <Typography>{`+${tel}`}</Typography>
          </a>
        </Item>
        <Item>
          <Typography bold={700}>{`WhatsApp: `}</Typography>
          <a href={`https://wa.me/${tel}`} target="_blank">
            <Typography>{`${name}`}</Typography>
          </a>
        </Item>
        <Item>
          <Typography bold={700}>{`Telegram: `}</Typography>
          <a href={`https://t.me/vladislavkirilov`} target="_blank">
            <Typography>{`${name}`}</Typography>
          </a>
        </Item>
        <Item>
          <Typography bold={700}>{`Почта: `}</Typography>
          <a href={`mailto:${email}`}>
            <Typography>{`${email}`}</Typography>
          </a>
        </Item>
        <Item>
          <Typography bold={700}>{`Github: `}</Typography>
          <a href={github} target="_blank">
            <Typography>{`ссылка на профиль github`}</Typography>
          </a>
        </Item>
        <Item>
          <Typography bold={700}>{`Instagram: `}</Typography>
          <a href={instagram} target="_blank">
            <Typography>{`мой instagram`}</Typography>
          </a>
        </Item>
      </List>
    </section>
  )
}
