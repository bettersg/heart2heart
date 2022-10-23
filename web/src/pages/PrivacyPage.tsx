import {
  Grid,
  GridItem,
  Heading,
  ListItem,
  OrderedList,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';
import { SecondaryColour } from '../util/constants';
import PrivacyNotice from './sections/PrivacyNotice';

const privacyNotices = [
  {
    title: 'Updated on 05 October 2022',
    content: (
      <Stack spacing={4}>
        <Text>
          Heart2Heart, a project under better.sg, is committed to protect and
          respect your right to privacy and ensures that the collection, use,
          disclosure and other processing of personal data is done so in
          accordance with applicable laws, regulations and guidelines on data
          privacy.
        </Text>
        <Text>
          For the purposes of this Privacy Notice, as a user/visitor of the
          Heart2Heart website and as a data subject, you will hereafter be
          referred to as “you” or “your”.
        </Text>
        <Text>
          This Privacy Notice provides you with information on how and why we
          collect your personal data, to whom and where it is shared and
          transferred to, how long we retain your personal data, your rights,
          what steps we take to ensure your personal data stays private and
          secure, our policies on direct marketing and the use of cookies and
          how you can contact us.
        </Text>
        <Text>
          You providing your personal data is voluntary and you may choose not
          to provide us with the requested data, but failure to do so may result
          in us being unable to provide or continue to provide our services to
          you.
        </Text>
        <Text>
          Please take a moment to read our Privacy Notice to understand more
          about your rights to the personal data that you have given to us and
          the Company’s principles and practices in collecting, processing,
          sharing and disposing of your personal data.
        </Text>
      </Stack>
    ),
  },
  {
    title: 'What personal data we collect from you',
    content: (
      <Stack spacing={4}>
        <Text>
          We may collect the following personal data (which includes sensitive
          personal data as defined under relevant applicable laws and
          regulations):
        </Text>
        <UnorderedList>
          <ListItem>
            Identity-related information such as your name, email address,
            Telegram handle, birth year, gender identity, race, religion,
            sexuality, property type, nationality or special needs
          </ListItem>
          <ListItem>
            Technical information such as IP address, browser information,
            operating systems and platform, device information
          </ListItem>
        </UnorderedList>
        <Text>The above information may be collected and stored either:</Text>
        <UnorderedList>
          <ListItem>
            Directly when you fill in an application form or use our website to
            submit queries, or other communications;
          </ListItem>
          <ListItem>
            Indirectly when you use our websites, social media platforms and
            mobile applications
          </ListItem>
        </UnorderedList>
      </Stack>
    ),
  },
  {
    title: 'Why we collect your personal data and how we use it',
    content: (
      <Stack spacing={4}>
        <Text>
          Your personal data is collected and used for the following purposes:
        </Text>
        <OrderedList>
          <ListItem>
            To manage our administrative and business operations and comply with
            internal policies and procedures;
          </ListItem>
          <ListItem>
            To provide you with services and to help us develop, improve, manage
            and administer the services we provide to you, including matching
            the information you provide to understand how we can serve you
            better. For example, we use your demographic information and
            responses to our questionnaire to build a profile about you, mapping
            onto the Big 5 Personality Traits. We collect sensitive demographic
            information such as your sexuality or special needs in order to
            ensure that intersectional identities can be represented as much as
            possible within conversations. We draw from the Big Eight Social
            Identity framework in deciding which socially constructed identities
            are relevant. We then algorithmically curate groups, maximising
            diversity among demographics and then ensuring a baseline level of
            complementarity between personalities. This ensures that groups are
            formed with sufficient scope for exploring a variety of perspectives
            while maintaining a desirable level of comfort between participants;
          </ListItem>
          <ListItem>
            To send you notifications and marketing messages in relation to our
            promotional events, opportunities, workshops, benefits and
            programmes;
          </ListItem>
          <ListItem>
            To conduct marketing activities including market research, customer
            profiling, customer insights and targeted marketing activities;
          </ListItem>
          <ListItem>
            To help us verify your identity for the purposes of processing and
            administering any application, registration or services; and
          </ListItem>
          <ListItem>
            To fulfil any other purposes directly related to (1) to (5) above.
          </ListItem>
        </OrderedList>
      </Stack>
    ),
  },
  {
    title: 'Your rights',
    content: (
      <Stack spacing={4}>
        <Text>
          Under applicable laws and regulations, you have the following rights
          to your personal data:
        </Text>
        <UnorderedList>
          <ListItem>
            To be informed on the collection and processing of your personal
            data;
          </ListItem>
          <ListItem>
            To object on the processing or sharing of your personal data;
          </ListItem>
          <ListItem>
            To request access and correct any inaccurate personal data relating
            to you;
          </ListItem>
          <ListItem>
            To request a copy of your personal data that we have collected;
          </ListItem>
          <ListItem>
            To request deletion of your personal data under reasonable grounds;
            and
          </ListItem>
          <ListItem>
            To withdraw your consent or opt-out on any services provided by the
            Company.
          </ListItem>
        </UnorderedList>
      </Stack>
    ),
  },
  {
    title: 'What measures we have implemented to protect your personal data',
    content: (
      <Stack spacing={4}>
        <Text>
          We have implemented reasonable security measures to protect your
          personal data against any unauthorized access, processing, erasure,
          loss or destruction. Measures have been taken to ensure the integrity,
          prudence and competence of persons having access to your personal data
          and that it is processed by secure means.
        </Text>
      </Stack>
    ),
  },
  {
    title: 'Direct Marketing',
    content: (
      <Stack spacing={4}>
        <Text>
          Where permitted by law, we may use your name, contact details, and
          demographic data for promotional or marketing purposes and conduct
          direct marketing to market products and services which may be relevant
          to you.
        </Text>
        <Text>
          If you do not wish us to use your personal data for direct marketing
          purposes, you may write to the Data Protection Officer by email at the
          address provided below to opt out from direct marketing activities.
        </Text>
      </Stack>
    ),
  },
  {
    title: 'Use of Cookies',
    content: (
      <Stack spacing={4}>
        <Text>
          We may use ‘cookies’ to improve our internet service. Cookies are
          small data files that are automatically stored on the web browser in
          your computer which can be retrieved by Heart2Heart’s website. Cookies
          enable Heart2Heart’s website to remember you and your preferences when
          you visit the website and enable us to tailor the website to your
          needs.
        </Text>
        <Text>
          The types of cookies we use and why we use them, includes but is not
          limited to the following:
        </Text>
        <UnorderedList>
          <ListItem>
            Strictly necessary cookies — These cookies are essential for you to
            browse our website and use its features, such as accessing secure
            areas of the site.
          </ListItem>
          <ListItem>
            Functionality cookies — These cookies allow our website to remember
            choices you have made in the past, like which language you prefer,
            which region you log in to, or what your user name and password are
            so you can automatically log in.
          </ListItem>
          <ListItem>
            Performance cookies — These cookies collect information about how
            you use a website, like which pages you visited and which links you
            clicked on. None of this information can be used to identify you. It
            is all aggregated and, therefore, anonymised. Their sole purpose is
            to improve website functions.
          </ListItem>
          <ListItem>
            Marketing cookies — These cookies track your online activity to help
            us deliver more relevant content for you. These cookies can share
            that information with other organisations or advertisers.
          </ListItem>
        </UnorderedList>
        <Text>
          The information collected by cookies is anonymous personalised
          settings information that contains no name or address information, or
          any information that will enable anyone to contact you via telephone,
          e-mail or any other means. However, you can disable cookies by
          changing your web browser settings. Please note that this may affect
          how you use our website or online services. It may make it difficult
          for you to transact with us through our website and we may require
          time to request additional information. Data Protection Officer
          Heart2Heart, better.sg By email: heart2heart@better.sg
        </Text>
      </Stack>
    ),
  },
  {
    title: 'How you can contact us',
    content: (
      <Stack spacing={4}>
        <Text>
          If you have any comments, suggestions, questions, complaints or want
          to exercise your rights regarding your personal data, please contact:
        </Text>
        <Stack>
          <Text>Data Protection Officer</Text>
          <Text>Heart2Heart, better.sg</Text>
          <Text>By email: heart2heart@better.sg</Text>
        </Stack>
        <Text />
      </Stack>
    ),
  },
];

const PrivacyPage: React.FC = () => (
  <>
    <Heading color={SecondaryColour} fontSize={{ base: 16, lg: 32 }} pt={4}>
      Privacy Notice
    </Heading>
    <Grid templateColumns="repeat(1fr, 8)" gap={{ base: 4 }} py={4}>
      {privacyNotices.map((notice) => (
        <GridItem my={2}>
          <PrivacyNotice title={notice.title} content={notice.content} />
        </GridItem>
      ))}
    </Grid>
  </>
);

export default PrivacyPage;
