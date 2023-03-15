import { createSlice } from '@reduxjs/toolkit'

const birthday = new Date(1993, 8, 2)
const monthOfBirth = {
	0: `января,`,
	1: `февраля`,
	2: `марта`,
	3: `апреля`,
	4: `мая`,
	5: `июня`,
	6: `июля`,
	7: `августа`,
	8: `сентября`,
	9: `окрября`,
	10: `ноября`,
	11: `декабря`,
}

const initialState = {
	name: `Владислав`,
	surname: `Кирилов`,
	age: ((new Date().getTime() - birthday) / (24 * 3600 * 365.25 * 1000)) | 0,
	birthday: `${birthday.getDate()} ${monthOfBirth[birthday.getMonth()]} ${birthday.getFullYear()}`,
	email: `palefire.xx@gmail.com`,
	lookingForAJob: true,
	tel: `79776776580`,
	github: `https://github.com/KirilovVladislav`,
	instagram: `https://www.instagram.com/7991cool`,
	skills: [ `JavaScript`, `React`, `Redux`, `RTK`, `TypeScript`, `HTML`, `CSS`],
	education: {
		yearOfEnding: 2014,
		institution: `Красноярский финансово-экономический колледж`,
		specialty: `Экономика и бухгалтерский учет, Бухгалтер, специалист по
		нало​гообложению`,
	},
	experience: [
		{
			id: 1,
			organization: `https://master-bobr.ru/`,
			position: `Frontend-разработчик`,
			duties: `Разработка SPA с использованием библиотеки react. Внутренне приложение для сотрудников компании где они могут просматривать свои заказы, отслеживать процесс их выполнения и получать всю актуальную информацию по заказам.`,
			startEmployment: `2021.09`,
			endEmployment: `2022.12`,
		},
		// {
		// 	id: 4,
		// 	organization: `Мастер Бобр`,
		// 	position: `Инженер`,
		// 	duties: `Разработка проектов, составление смет.`,
		// 	startEmployment: `2020.12`,
		// 	endEmployment: `2022.09`,
		// },
		// {
		// 	id: 3,
		// 	organization: `Максимус-Ритейл`,
		// 	position: `Менеджер отдела контроля качества`,
		// 	duties: `Контроль выполнения стандартов обслуживания принятых в компании. Составление отчетов о проделанной работе.`,
		// 	startEmployment: `2019.2`,
		// 	endEmployment: `2022.04`,
		// },
		// {
		// 	id: 2,
		// 	organization: `Мобильные ТелеСистемы (МТС)`,
		// 	position: `Продавец-консультант`,
		// 	duties: `Консультирование клиентов, активные продажи.`,
		// 	startEmployment: `2018.8`,
		// 	endEmployment: `2019.2`,
		// },
		// {
		// 	id: 1,
		// 	organization: `фотосудия ред`,
		// 	position: `фотограф-ретушер`,
		// 	duties: `Техническая ретушь фотографий в photoshop, портретная и предметная съёмка. Настройка света и фотооборудования.`,
		// 	startEmployment: `2016.8`,
		// 	endEmployment: `2018.8`,
		// },
	],
}


const slice = createSlice({
	name: `about`,
	initialState,
	reducers: {

	}
})


export const {

} = slice.actions


export default slice.reducer