import React from 'react'
import { useSelector } from 'react-redux'

import styles from './Resume.module.scss'
import { Typography, List, Item, StyledNavLink } from '../../index'

export const Resume = () => {
  const {
    name,
    surname,
    age,
    birthday,
    tel,
    email,
    github,
    skills,
    education,
    experience,
  } = useSelector((state) => state.about)

  return (
    <section className={styles.resume}>
      <Typography
        className={styles.title}
        as={`h3`}
      >{`${name} ${surname}`}</Typography>
      <section className={styles.personalInfo}>
        <Typography
          className={styles.age}
        >{`${age} лет, родился ${birthday}`}</Typography>
        <section className={styles.contacts}>
          <Typography as={`h4`} className={styles.subtitle}>
            {`Контакты`}
          </Typography>
          <List direction={`column`}>
            <Item>
              <a href={`tel:${tel}`} className={styles.link}>
                <Typography mode={`link`}>{`+${tel}`}</Typography>
              </a>
            </Item>
            <Item>
              <a
                href={`https://wa.me/${tel}`}
                target="_blank"
                className={styles.link}
              >
                <Typography mode={`link`}>{`WhatsApp`}</Typography>
              </a>
            </Item>
            <Item>
              <a target="_top" href={`mailto:${email}`} className={styles.link}>
                <Typography mode={`link`}>{`${email}`}</Typography>
              </a>
            </Item>
          </List>
        </section>
        <img
          className={styles.avatar}
          alt={`Моя фотография`}
          src={require('../../../assets/img/avatar.jpeg')}
        ></img>
      </section>
      <section className={styles.aboutMe}>
        <Typography as={`h4`} className={styles.subtitle}>
          Обо мне
        </Typography>
        <p>
          <Typography>
            Есть несколько проектов которые вы можете посмотреть в разделе{' '}
            <Typography
              className={styles.navLink}
              as={StyledNavLink}
              to={`/personal-projects`}
              mode={`link`}
            >{`личные проекты`}</Typography>{' '}
            или{' '}
            <Typography
              className={styles.navLink}
              as={StyledNavLink}
              to={`/test-projects`}
              mode={`link`}
            >{`тестовые задания`}</Typography>
            .
          </Typography>
        </p>
        <p>
          <Typography>
            В качестве фреймворка на проектах используется react
            (create-react-app), для организации state менеджмента redux.
          </Typography>
        </p>
      </section>
      <section className={styles.skills}>
        <Typography as={`h4`} className={styles.subtitle}>
          Ключевые навыки
        </Typography>
        <List className={styles.list}>
          {skills.map((skill) => (
            <Item className={styles.item} key={`${skill}`}>{`${skill}`}</Item>
          ))}
        </List>
      </section>
      <section className={styles.education}>
        <Typography as={`h4`} className={styles.subtitle}>
          Образование
        </Typography>
        <div className={styles.container}>
          <Typography className={styles.yearOfEnding}>
            {`${education.yearOfEnding}`}
          </Typography>
          <div className={styles.innerContainer}>
            <Typography as={`p`} bold={700} className={styles.title}>
              {`${education.institution}`}
            </Typography>
            <Typography className={styles.specialty}>
              {`${education.specialty}.`}
            </Typography>
          </div>
        </div>
      </section>
      <section className={styles.experience}>
        <Typography as={`h4`} className={styles.subtitle}>
          Опыт работы
        </Typography>
        <List direction={`column`}>
          {experience.map((item) => (
            <Item key={item.id}>
              <div className={styles.container}>
                <div className={styles.dateJob}>
                  <Typography className={styles.start}>
                    {`${item.startEmployment} - `}
                  </Typography>
                  <Typography className={styles.end}>
                    {`${item.endEmployment || `по настоящее время`}`}
                  </Typography>
                </div>
                <div className={styles.innerContainer}>
                  <Typography as={`p`} bold={700} className={styles.title}>
                    {`${item.organization}`}
                  </Typography>
                  <Typography bold={700} className={styles.position}>
                    {`${item.position}`}
                  </Typography>
                  <Typography
                    as={`p`}
                    size={`0.8rem`}
                    className={styles.duties}
                  >
                    {`${item.duties}`}
                  </Typography>
                </div>
              </div>
            </Item>
          ))}
        </List>
      </section>
    </section>
  )
}
