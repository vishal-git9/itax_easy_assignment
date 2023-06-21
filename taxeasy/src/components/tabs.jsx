import { Card, CardBody, Text, useColorModeValue } from '@chakra-ui/react'
import { BsHouseCheck } from 'react-icons/bs'
import { GiReceiveMoney } from 'react-icons/gi'

export const Tabs = ({setTab}) => {
  const bgColor = useColorModeValue("white","#2D3748")
  return (
    <>
        <Card
          bgColor={"transparent"}
          border={"1px solid #2D3748"}
          boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px;"}
          cursor={"pointer"}
          transition={"transform 0.5s ease-in-out"}
          _hover={{
            bgColor: bgColor,
            transform:"scale(1.1)"
          }}

          onClick={()=>setTab("/hra")}

        >
          <CardBody
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={5}
          >
            <BsHouseCheck fontSize={"50px"} />
            <Text>HRA CALCULATOR</Text>
          </CardBody>
        </Card>
        <Card
          bgColor={"transparent"}
          border={"1px solid #2D3748"}
          boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px;"}
          transition={"transform 0.5s ease-in-out"}
          cursor={"pointer"}
          _hover={{
            bgColor:bgColor,
            transform:"scale(1.1)"
          }}
          onClick={()=>setTab("/tax")}
        >
          <CardBody
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={5}
          >
            <GiReceiveMoney fontSize={"50px"} />
            <Text>TAX CALCULATOR</Text>
          </CardBody>
        </Card>
    </>
  )
}
