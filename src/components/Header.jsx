import {
  Box,
  Flex,
  Heading,
  Container,
  Stack,
  Text,
  Icon,
  Button,
  useColorModeValue,
  Badge,
  Img,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { SimpleGrid } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from '@chakra-ui/react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
  FaTelegram,
  FaVuejs,
} from 'react-icons/fa'
import { SiDjango, SiGraphql } from 'react-icons/si'
import '../index.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Header() {
  const [HomePageData, setHomePageData] = useState({})
  const [collegeData, setCollegeData] = useState({})
  const [projects, setProjects] = useState([])
  const [experience, setExperience] = useState([])
  const [links, setLinks] = useState([])
  useEffect(() => {
    axios
      .post('http://localhost:5000/api/homepage/get/data', {
        findid: localStorage.getItem('userinfo'),
      })
      .then(result => {
        setCollegeData(result.data.data.collegeData)
        setHomePageData(result.data.data)
      })
      .catch(err => {
        console.log(err)
      })
    axios
      .post('http://localhost:5000/api/projects/get', {
        findid: localStorage.getItem('userinfo'),
      })
      .then(result => {
        setProjects(result.data.Data)
      })
      .catch(err => {
        console.log(err)
      })
    axios
      .post('http://localhost:5000/api/experience/get', {
        findid: localStorage.getItem('userinfo'),
      })
      .then(result => {
        setExperience(result.data.Data)
      })
      .catch(err => {
        console.log(err)
      })
    axios
      .post('http://localhost:5000/api/links/get', {
        findid: localStorage.getItem('userinfo'),
      })
      .then(result => {
        setLinks(result.data.Data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <>
      <Flex>
        <Container maxW="100ch">
          <Stack
            as={Box}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 30, md: '5rem' }}
            direction="column"
          >
            <Box w="36" marginX="auto">
              <Img borderRadius="full" src={HomePageData.picture} />
            </Box>

            <Heading
              fontWeight={400}
              fontSize={{ base: 20, md: 40 }}
              alignItems="center"
              lineHeight="110%"
              fontFamily="Source Code Pro"
            >
              Hey, I'm {HomePageData.Name} <span className="wave"> 👋</span>
              and I am a {HomePageData.currentTitle}.
            </Heading>

            <Box alignItems="center">
              <Text
                fontWeight={300}
                fontFamily="mono"
                fontSize="30px"
                marginX="1"
                boxSizing="content-box"
              >
                {' '}
                <Tag size="60px" colorScheme="red" borderRadius="full">
                  <TagLabel padding="20px">About Me : 👓</TagLabel>
                </Tag>
              </Text>
              <br />
              <Box
                display="flex"
                backdropBlur="md"
                borderColor="black"
                background={useColorModeValue('gray.200', 'whiteAlpha.100')}
                paddingX="6"
                paddingY="3"
                borderRadius="lg"
                margin="auto"
                justifyContent="start"
                boxSizing="unset"
              >
                <Text
                  fontWeight={300}
                  fontFamily="M PLUS Rounded 1c"
                  fontSize={{ md: 'large' }}
                  marginX="1"
                  boxSizing="content-box"
                >
                  {HomePageData.aboutme}
                </Text>
              </Box>
            </Box>
            <Text
              fontWeight={300}
              fontFamily="mono"
              fontSize="30px"
              marginX="1"
              boxSizing="content-box"
            >
              <Tag size="60px" colorScheme="red" borderRadius="full">
                <TagLabel padding="10px">College Info 🎓</TagLabel>
              </Tag>
            </Text>
            <Box
              display="flex"
              backdropBlur="md"
              borderColor="black"
              background={useColorModeValue('gray.200', 'whiteAlpha.100')}
              paddingX="6"
              paddingY="3"
              borderRadius="lg"
              margin="auto"
              justifyContent="center"
              boxSizing="unset"
            >
              <Text
                fontWeight={300}
                fontFamily="M PLUS Rounded 1c"
                fontSize="20px"
                marginX="1"
                boxSizing="content-box"
              >
                <Badge
                  as="a"
                  variant="outline"
                  marginBottom="5"
                  fontSize="1.2rem"
                >
                  College Name
                </Badge>{' '}
                :{collegeData.name}
                <br />
                <Badge
                  as="a"
                  variant="outline"
                  marginBottom="5"
                  fontSize="1.2rem"
                >
                  Starting Date: {collegeData.startingDate}
                </Badge>
                <br />
                <Badge
                  as="a"
                  variant="outline"
                  marginBottom="5"
                  fontSize="1.2rem"
                >
                  Ending Date: {collegeData.endingDate}
                </Badge>
                <br />
                {collegeData.description}
              </Text>
            </Box>
            <Text
              fontWeight={300}
              fontFamily="mono"
              fontSize="30px"
              marginX="1"
              boxSizing="content-box"
            >
              <Tag size="60px" colorScheme="red" borderRadius="full">
                <TagLabel padding="10px">Projects♻</TagLabel>
              </Tag>
            </Text>

            <SimpleGrid columns={[1, null, 2]} spacing={5}>
              {projects.map((project, index) => {
                return (
                  <Box
                    maxW={'400px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    overflow={'hidden'}
                  >
                    <Box p={6}>
                      <Stack spacing={0} align={'center'} mb={5}>
                        <Heading
                          fontSize={'2xl'}
                          fontWeight={500}
                          fontFamily={'body'}
                        >
                          {project.Name}
                        </Heading>
                        <img src={project.pic} />
                        <br />
                        <Text color={'gray.500'}>
                          Description: {project.description}
                        </Text>
                        <br />
                        <Text color={'gray.100'}>
                          Techstacks: {project.techstacks}
                        </Text>
                      </Stack>
                      <Button
                        w={'full'}
                        mt={8}
                        bg={useColorModeValue('#151f21', 'gray.900')}
                        color={'white'}
                        rounded={'md'}
                        _hover={{
                          transform: 'translateY(-2px)',
                          boxShadow: 'lg',
                        }}
                      >
                        Follow
                      </Button>
                    </Box>
                  </Box>
                )
              })}
            </SimpleGrid>

            <div class="CV-grid">
              <div class="CV-grid-column">
                <div class="CV-jobs">
                  <Text
                    fontWeight={300}
                    fontFamily="mono"
                    fontSize="30px"
                    marginX="1"
                    boxSizing="content-box"
                  >
                    <Tag size="60px" colorScheme="red" borderRadius="full">
                      <TagLabel padding="10px">Work Experience</TagLabel>
                    </Tag>
                  </Text>

                  {experience.map((experienceOne, index) => {
                    return (
                      <section class="CV-timeline CV-job">
                        <h3 class="CV-timeline-heading">
                          <span class="CV-timeline-heading-title">
                            💻 {experienceOne.type}
                          </span>
                          &#8211;{' '}
                          <span class="CV-timeline-heading-location">
                            📈{experienceOne.duration}
                          </span>
                          <small class="CV-timeline-heading-duration">
                            {experienceOne.startingDate}-
                            {experienceOne.endingDate}
                          </small>
                        </h3>
                        <small class="CV-timeline-heading-duration">
                          ✍ {experienceOne.company}
                        </small>
                        <ul class="CV-timeline-details">
                          <li class="CV-job-timeline-item">
                            {experienceOne.description}
                          </li>
                        </ul>
                      </section>
                    )
                  })}
                </div>
              </div>
            </div>
            <Text
              fontWeight={300}
              fontFamily="mono"
              fontSize="30px"
              marginX="1"
              boxSizing="content-box"
            >
              <Tag size="60px" colorScheme="red" borderRadius="full">
                <TagLabel padding="10px">Links</TagLabel>
              </Tag>
            </Text>
            {links.map((link, index) => {
              return (
                <Link to={{ pathname: link.link }} target="_blank">
                  <div className="Link-Div">
                    <p className="LinkName">{link.Name}</p>
                  </div>
                </Link>
              )
            })}
          </Stack>
        </Container>
      </Flex>
    </>
  )
}
