import React from 'react'
import { storiesOf } from '@storybook/react'
import { TextInput, TextareaInput, FormSubmit } from '../forms'

storiesOf('Components/Forms', module)
  .add(
    'TextInput',
    () => (
      <>
        <label>Input text:</label>
        <TextInput value="This is text" />
      </>
    ),
    {
      info: 'A regular text `input`.',
    }
  )
  .add(
    'TextInput - with placeholder',
    () => (
      <>
        <label>Input text:</label>
        <TextInput placeholder="Placeholder" />
      </>
    ),
    {
      info: 'A regular text `input` with placeholder text.',
    }
  )
  .add(
    'TextareaInput',
    () => (
      <>
        <label>Input text:</label>
        <TextareaInput />
      </>
    ),
    {
      info: 'A regular `textarea` input.',
    }
  )
  .add('FormSubmit', () => <FormSubmit value="Submit form" />, {
    info: 'A regular `input` with type of `submit`.',
  })
