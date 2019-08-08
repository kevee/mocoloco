import React from 'react'
import Layout from '../components/layouts/default'
import PageTitle from '../components/common/page-title'
import { LeadParagraph } from '../components/common/type'
import { TextContainer } from '../components/common/container'

const Index = () => (
  <Layout title="Legal">
    <TextContainer>
      <PageTitle>Legal information</PageTitle>
      <LeadParagraph>
        <strong>Mocoloco</strong> helps the people of Monterey County,
        California, find the entities that govern their lives.
      </LeadParagraph>
      <h2>Caveats</h2>
      <p>
        While I strive to keep all the information on the website up-to-date,
        I'm just one person, and can make mistakes. If you are using this
        website to make life-changing decisions, I would suggest double-checking
        the information first.
      </p>
      <h2>License</h2>
      Mocoloco is open source, and covered under the{' '}
      <a href="https://github.com/kevee/mocoloco/blob/master/LICENSE">
        MIT license
      </a>
      . The MIT License (MIT)
      <p>Copyright (c) 2019 Kevin Miller</p>
      <p>
        Permission is hereby granted, free of charge, to any person obtaining a
        copy of this software and associated documentation files (the
        "Software"), to deal in the Software without restriction, including
        without limitation the rights to use, copy, modify, merge, publish,
        distribute, sublicense, and/or sell copies of the Software, and to
        permit persons to whom the Software is furnished to do so, subject to
        the following conditions:
      </p>
      <p>
        The above copyright notice and this permission notice shall be included
        in all copies or substantial portions of the Software.
      </p>
      <p>
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
        IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
        CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
        TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
        SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      </p>
      <h2>Privacy Policy</h2>
      <p>
        Your privacy is important to me. It is Mocoloco's policy to respect your
        privacy regarding any information we may collect from you across the
        website, <a href="https://mocolo.co">https://mocolo.co</a>, and other
        sites we own and operate.
      </p>
      <p>I will never ask for personal or private information.</p>
      <p>
        I don’t share any personally identifying information publicly or with
        third-parties, except when required to by law.
      </p>
      <p>
        My website may link to external sites that are not operated by us.
        Please be aware that we have no control over the content and practices
        of these sites, and cannot accept responsibility or liability for their
        respective privacy policies.
      </p>
      <p>
        If you have any questions about how I handle user data and personal
        information, feel free to contact me at kevin@kevee.net.
      </p>
      <p>This policy is effective as of 1 August 2019.</p>
    </TextContainer>
  </Layout>
)

export default Index
