import React from 'react'
import { storiesOf } from '@storybook/react'
import { LeadParagraph, SectionTitle } from '../type'

const sampleText =
  '"There go flukes! 🐳" was the cry, an announcement immediately followed by Stubb’s producing his match and igniting his pipe, for now a respite was granted. After the full interval of his sounding had elapsed, the whale rose again, and being now in advance of the smoker’s boat, and much nearer to it than to any of the others, Stubb counted upon the honor of the capture.'

const shortSampleText = "The Pequod's three boats now began"

storiesOf('Typography', module)
  .add('Paragraph', () => (
    <>
      <p>{sampleText}</p>
      <p>{sampleText}</p>
    </>
  ))
  .add('Headers', () => (
    <>
      <h1>{shortSampleText}</h1>
      <h2>{shortSampleText}</h2>
      <h3>{shortSampleText}</h3>
      <h4>{shortSampleText}</h4>
      <h5>{shortSampleText}</h5>
    </>
  ))
  .add('Lead paragraph', () => <LeadParagraph>{sampleText}</LeadParagraph>, {
    info: 'A paragraph used for short lead-ins.',
  })
  .add(
    'Section title',
    () => <SectionTitle>Elected representatives</SectionTitle>,
    {
      info: 'An `h2` element with more style to make it break up longer pages.',
    }
  )
