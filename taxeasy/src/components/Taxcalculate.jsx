import { Container, Heading } from "@chakra-ui/react"
import { BiArrowBack } from "react-icons/bi"

export const Taxcalculate = ({settabs}) => {
  return (
    <Container display={"flex"} gap={10} flexDir={"column"}>
    <BiArrowBack cursor={"pointer"} fontSize={"30px"} onClick={()=>settabs("")}/>
    <Heading>Advance tax Calculator</Heading>        
</Container>
  )
}
