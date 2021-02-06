import React from 'react'
import styled from 'styled-components'
import * as Yup from 'yup'

import { Formik, Form as FormikForm, ErrorMessage, Field } from 'formik'

const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
`

const InputField = styled(Field)`
  outline: none;
  border: none;

  margin-bottom: 10px;
  padding: 5px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  font-size: 16px;
`

const Button = styled.button`
  border: none;
  outline: none;

  padding: 10px;
  border-radius: 10px;
  background-color: #000;
  color: #fff;
  font-size: 16px;

  ${({ disabled }) => disabled && `background-color: #efefef;`}
`

const ErrorSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, '2글자 이상 입력해주세요')
    .max(20, '20글자 이하로 적어주세요')
    .required(),
  author: Yup.string().required(),
})

function WebtoonForm({ onAddWebtoon }) {
  // const form = useRef(null)

  // useEffect(() => {
  //   if (!form.current) {
  //     form.current.getFormikActions().validateForm()
  //   }
  // }, [])

  return (
    <Formik
      initialValues={{
        title: '',
        author: '',
      }}
      validationSchema={ErrorSchema}
      // validate={({ title, author }) => {
      //   const errors = {}

      //   if (!title || !author) {
      //     errors.message = '모든 값을 입력해주세요'
      //   }

      //   // if (!title) {
      //   //   errors.title = '타이틀 값을 입력해주세요'
      //   // }
      //   // if (!author) {
      //   //   errors.author = '작가 이름을 입력해주세요'
      //   // }

      //   return errors
      // }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log('submit...', onAddWebtoon)
        onAddWebtoon({
          ...values,
          src:
            'https://shared-comic.pstatic.net/thumb/webtoon/703852/thumbnail/thumbnail_IMAG10_7a7e52e5-f211-485d-a5ba-4f6f3f8acdc6.jpg',
          day: '화요일',
        })

        resetForm()
        setSubmitting(false)
      }}
    >
      {({ isValid, isSubmitting, errors }) => {
        console.log('errors', errors)
        // isValid = 모든 값이 유효할 때
        // isSubmitting = 제출 중이 아닐 때
        const isSubmitable = isValid && !isSubmitting
        // const hasError = Object.values(errors).some((message) => message)
        // errors.title erros.author
        return (
          <Form>
            <InputField
              type="text"
              placeholder="제목을 입력하세요"
              name="title"
            />
            {/* <ErrorMessage
              name="title"
              render={(message) => {
                return <div>{message}</div>
              }}
            /> */}
            <InputField
              type="text"
              placeholder="작가님을 입력하세요"
              name="author"
            />
            {errors.message && <div>{errors.message}</div>}
            <ErrorMessage name="author" component="div" />
            <Button type="submit" disabled={!isSubmitable}>
              등록
            </Button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default WebtoonForm
